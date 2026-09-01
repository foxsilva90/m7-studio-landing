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

## Estrutura

```
src/
  data/site.ts        fonte única: contato, endereço, planos, FAQ, stats
  layouts/Base.astro  <head>, SEO, Open Graph, JSON-LD (LocalBusiness)
  components/          Nav, Hero, Studio, Structure, HowItWorks, Plans, Faq, FinalCta, Footer
  styles/global.css    design system (tokens claro/escuro, componentes)
  pages/index.astro    monta a página + script do hero (reveal, VU meter, waveform)
public/
  logo-m7.mp4          vídeo da logo (fundo do hero)
  og.jpg               imagem de compartilhamento (1200x630)
  favicon.svg
  robots.txt
legacy/
  index.html           versão anterior de arquivo único (referência)
m7-studio-landing.html  fonte usada no editor de Artifact do Claude
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
