import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const SITE = "https://m7estudio.com";

export default defineConfig({
  site: SITE,
  integrations: [sitemap()],
  build: { inlineStylesheets: "auto" },
});
