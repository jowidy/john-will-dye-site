import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

export default defineConfig({
  output: "static",
  site: process.env.GITHUB_ACTIONS ? "https://johnwilldye.com" : "http://localhost:4321",
  base: "/",
  trailingSlash: "always",
  integrations: [sitemap()],
});
