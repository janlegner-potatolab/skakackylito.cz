import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  site: "https://skakackylito.cz",
  trailingSlash: "never",
  build: {
    format: "file",
  },
  integrations: [sitemap()],
  vite: {
    plugins: [tailwindcss()],
  },
});
