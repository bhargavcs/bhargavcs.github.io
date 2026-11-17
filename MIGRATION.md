# Quartz migration

Quartz is the publishing implementation. GitHub Actions builds only `content/` and deploys the generated `public/` directory. Legacy Jekyll sources are retained for reference.

## Content and URLs

- `/`: `content/index.md`.
- `/research/`: a curated overview with individual paper and thesis pages, including abstracts and PDF links.
- `/publications/`: redirects to `/research/` through the overview's alias.
- `/talks/` and `/resources/`: folder indexes preserve the existing landing-page URLs.
- Existing talk slugs are preserved.
- `/files/*.pdf` and `/images/*`: assets copied from `content/`; the resultants manuscript PDF is included.
- Template example pages from the old theme have not been migrated.

## Unfinished notes

`content/notes/` contains demonstration material, excluded by `configuration.ignorePatterns`. It is absent from the published pages, search, sitemap, and sidebar. The notes-specific graph and homepage link have been removed. The general graph plugin remains disabled.

## Deployment

Requires Node.js 22+ and npm 10.9.2+. Run `npm ci`, `npm run install-plugins`, and `npx quartz build --serve` for local development.

`.github/workflows/deploy.yml` deploys pushes to `master` with GitHub Pages Actions. Configure the repository's Pages source as GitHub Actions before publishing.
