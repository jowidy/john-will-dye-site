import { defineConfig } from "astro/config";

const [owner, repository] = (process.env.GITHUB_REPOSITORY ?? "/").split("/");
const isUserSite = Boolean(owner && repository === `${owner}.github.io`);

export default defineConfig({
  output: "static",
  site: owner ? `https://${owner}.github.io` : "http://localhost:4321",
  base: repository && !isUserSite ? `/${repository}` : "/",
  trailingSlash: "always",
});
