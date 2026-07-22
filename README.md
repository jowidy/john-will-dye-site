# John Will Dye author site

A static author website built with Astro and designed for free hosting on GitHub Pages.

## Local preview

```powershell
npm install
npm run dev
```

## Add a journal entry

Copy `src/content/journal/_template.md`, remove the leading underscore from the new filename, replace the frontmatter and body, and set `draft: false` when the entry is public.

## Add published fiction

Copy `src/content/fiction/_template.md`, remove the leading underscore from the new filename, and replace every frontmatter value with cleared public information.

## Replace provisional copy

Site-wide voice-bearing placeholders live in `src/config/site.ts`; work-specific descriptions live with their Markdown entries. Replace them only with copy John has written or approved.

## Publish

The included GitHub Actions workflow builds and publishes the site whenever the `main` branch is pushed. In the repository settings, set Pages to use **GitHub Actions**. The Astro configuration automatically accounts for a repository subpath and can be simplified when a custom domain is added.

## Embargo

Do not add or announce unannounced publication information. The current private product record contains the authoritative embargo constraint.
