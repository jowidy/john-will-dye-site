# John Will Dye author site

A static author website built with Astro and designed for free hosting on GitHub Pages.

## Local preview

```powershell
npm install
npm run dev
```

## Connect the blog

The header, homepage Blog block, and Blog page link to `https://johnwilldye.substack.com/`. Posts and subscribers remain managed there. If the publication URL changes, update `site.substack.url` and `site.substack.feedUrl` in `src/config/site.ts`.

## Add fiction

Copy `src/content/fiction/_template.md`, remove the leading underscore from the new filename, and replace every frontmatter value with cleared public information.
Use `status: "published"` with a public URL for available work. For an announced title that is not yet available, use `status: "coming-soon"` and omit its publication, year, and URL until those details are cleared.

## Replace provisional copy

Site-wide voice-bearing placeholders live in `src/config/site.ts`; work-specific descriptions live with their Markdown entries. Replace them only with copy John has written or approved.

## Publish

The included GitHub Actions workflow builds and publishes the site whenever the `main` branch is pushed. GitHub Pages uses `johnwilldye.com` as its custom domain; `public/CNAME`, `astro.config.mjs`, and the repository Pages setting must stay aligned.

## Embargo

Do not add or announce unannounced publication information. The current private product record contains the authoritative embargo constraint.
