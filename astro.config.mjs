import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

// TODO: trocar para o domínio final quando definido
const SITE = "https://m7-studio-landing.vercel.app";

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
});
