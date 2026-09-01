# M7 Studio Produções

Landing page do M7 Studio Produções — estúdio de podcast para alugar no Rio de Janeiro.

Site em **Astro** (estático), deploy na Vercel.

## Rodar

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # gera dist/
npm run preview  # serve o build
```

## Design

Sistema editorial: fundo papel quente (light-first), títulos em serifa
**Fraunces**, corpo em **Hanken Grotesk**, rótulos em **IBM Plex Mono**.
Grade assimétrica com numerais de seção. Momentos escuros (`.section--noir`)
para a abertura e o CTA final. Paleta: carvão / prata / dourado.

O vídeo da logo (marca d'água do Veo removida com `delogo`) toca uma vez como
abertura no primeiro acesso da sessão. Pulado em `prefers-reduced-motion`.

## Estrutura

```
src/
  data/site.ts         fonte única: contato, endereço, planos, FAQ, stats
  layouts/Base.astro    <head>, SEO, Open Graph, JSON-LD (LocalBusiness)
  components/
    Intro.astro         splash de abertura (vídeo da logo)
    SectionHead.astro   numeral + kicker + título (reutilizado nas seções)
    Nav, Hero, Studio, Structure, HowItWorks, Plans, Faq, FinalCta, Footer
  styles/global.css     design system (tokens claro/escuro, componentes)
  pages/index.astro     monta a página + script (abertura + reveal ao rolar)
public/
  logo-m7.mp4           vídeo da logo, sem marca d'água
  og.jpg                imagem de compartilhamento (1200x630)
  favicon.svg
  robots.txt
```

## Editar conteúdo

Quase tudo vive em [`src/data/site.ts`](src/data/site.ts): telefone, e-mail,
Instagram, endereço, os 3 planos e a FAQ. Trocar lá reflete em toda a página.

### Ainda com placeholder

- Preços dos planos (`R$ 000`) em `src/data/site.ts`
- `site` em `astro.config.mjs` aponta para o domínio provisório da Vercel

Quando tiver e-mail e Instagram, adicionar de volta em `src/data/site.ts`,
`src/components/Footer.astro` e no JSON-LD de `src/layouts/Base.astro`.

## Deploy

Vercel detecta Astro automaticamente (build `astro build`, saída `dist/`).
Push na branch `main` publica.
