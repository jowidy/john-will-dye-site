# John Will Dye author site

A static author website built with Astro and designed for free hosting on GitHub Pages.

## Local preview

```powershell
npm install
npm run dev
```

## Connect the blog

Create the Substack, then add its full public URL to `site.substack.url` in `src/config/site.ts`. The header, homepage Blog block, and Blog page will then link directly to Substack. Posts and subscribers remain managed there.

## Add published fiction

Copy `src/content/fiction/_template.md`, remove the leading underscore from the new filename, and replace every frontmatter value with cleared public information.

## Replace provisional copy

Site-wide voice-bearing placeholders live in `src/config/site.ts`; work-specific descriptions live with their Markdown entries. Replace them only with copy John has written or approved.

## Publish

The included GitHub Actions workflow builds and publishes the site whenever the `main` branch is pushed. In the repository settings, set Pages to use **GitHub Actions**. The Astro configuration automatically accounts for a repository subpath and can be simplified when a custom domain is added.

## Embargo

Do not add or announce unannounced publication information. The current private product record contains the authoritative embargo constraint.
