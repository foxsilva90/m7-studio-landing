// Movimento da página: reveal ao rolar, títulos com virada 3D palavra
// por palavra, contadores e estado da nav sobre o palco escuro.

const COUNT_MS = 1400;
const SAFETY_REVEAL_MS = 2500;

// Quebra um título em palavras (<span.w><span.wi>) preservando <em>.
function splitWords(el: HTMLElement) {
  if (el.dataset.split) return;
  el.dataset.split = "1";
  let i = 0;
  const wrap = (content: Node) => {
    const w = document.createElement("span");
    w.className = "w";
    const wi = document.createElement("span");
    wi.className = "wi";
    wi.style.setProperty("--i", String(i++));
    wi.appendChild(content);
    w.appendChild(wi);
    return w;
  };
  const out = document.createDocumentFragment();
  Array.from(el.childNodes).forEach((node) => {
    if (node.nodeType === Node.TEXT_NODE) {
      const parts = (node.textContent ?? "").split(/(\s+)/);
      parts.forEach((part) => {
        if (!part) return;
        if (/^\s+$/.test(part)) out.appendChild(document.createTextNode(" "));
        else out.appendChild(wrap(document.createTextNode(part)));
      });
    } else {
      out.appendChild(wrap(node.cloneNode(true)));
    }
  });
  el.replaceChildren(out);
  el.style.setProperty("--words", String(i));
}

// Anima o número dentro de "4K", "08", "2" mantendo sufixo e zeros.
function countUp(el: HTMLElement) {
  const raw = el.textContent ?? "";
  const match = raw.match(/^(\d+)(.*)$/);
  if (!match) return;
  const [, digits, suffix] = match;
  const target = Number(digits);
  const pad = digits.length;
  const t0 = performance.now();
  const tick = (now: number) => {
    const p = Math.min(1, (now - t0) / COUNT_MS);
    const eased = 1 - Math.pow(1 - p, 3);
    el.textContent = String(Math.round(target * eased)).padStart(pad, "0") + suffix;
    if (p < 1) requestAnimationFrame(tick);
  };
  requestAnimationFrame(tick);
}

export function initMotion(reduce: boolean) {
  const root = document.documentElement;
  root.classList.add("js");

  const titles = document.querySelectorAll<HTMLElement>(
    ".hero__title, .head__title, .cta__title",
  );
  titles.forEach(splitWords);

  const revealEls = document.querySelectorAll<HTMLElement>(
    ".section__grid > *, .hero__inner > *, .cta > *",
  );
  revealEls.forEach((el) => el.classList.add("reveal"));

  const numbers = document.querySelectorAll<HTMLElement>(".stats .n");

  const showAll = () => {
    revealEls.forEach((el) => el.classList.add("in"));
    titles.forEach((el) => el.classList.add("is-in"));
  };

  if (reduce || !("IntersectionObserver" in window)) {
    showAll();
  } else {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (!e.isIntersecting) return;
          const el = e.target as HTMLElement;
          if (el.classList.contains("n")) countUp(el);
          else el.classList.add("in", "is-in");
          io.unobserve(el);
        });
      },
      { threshold: 0.15, rootMargin: "0px 0px -6% 0px" },
    );
    revealEls.forEach((el) => io.observe(el));
    titles.forEach((el) => io.observe(el));
    numbers.forEach((el) => io.observe(el));
    // rede de segurança: nada fica escondido se o observer falhar
    setTimeout(showAll, SAFETY_REVEAL_MS);
  }

  // nav transparente enquanto está sobre o palco escuro do hero
  const nav = document.querySelector<HTMLElement>(".nav");
  const hero = document.querySelector<HTMLElement>(".hero");
  if (nav && hero) {
    let queued = false;
    const update = () => {
      queued = false;
      const overStage = window.scrollY < hero.offsetHeight - nav.offsetHeight;
      nav.classList.toggle("is-stage", overStage);
    };
    window.addEventListener(
      "scroll",
      () => {
        if (!queued) {
          queued = true;
          requestAnimationFrame(update);
        }
      },
      { passive: true },
    );
    update();
  }
}
