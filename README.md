# Bhargav C S — academic website

This site uses Quartz and is published at https://bhargavcs.github.io.

## Local preview

Use Node.js 22.16.0 (see `.node-version`) and npm 10.9.2 or newer.

```sh
npm ci
npm run install-plugins
npx quartz build --serve
```

Open http://localhost:8080. Quartz rebuilds the preview when content changes.

## Editing

- `content/index.md`: homepage and contact information.
- `content/research/index.md`: research overview.
- `content/research/*.md`: individual papers and theses.
- `content/talks/`: talks and presentations.
- `content/resources/index.md`: recommended resources.
- `content/files/` and `content/images/`: PDFs and images.
- `quartz.config.yaml`: site settings, theme, and plugins.
- `quartz.ts`: sidebar labels and layout customization.
- `quartz/styles/custom.scss`: custom styling.

Research Notes in `content/notes/` are unfinished examples and are excluded from builds through `ignorePatterns` in `quartz.config.yaml`. Remove that exclusion and restore navigation when the section is ready.

## Publishing

`.github/workflows/deploy.yml` builds and deploys `public/` on pushes to `master`. The GitHub Pages source must be **GitHub Actions** in repository Settings → Pages. The workflow can also be run manually.

The legacy Jekyll sources (`_pages/`, `_layouts/`, `_includes/`, `_sass/`, `_config.yml`, and related files) are retained for reference. They are not used by the Quartz build or uploaded to GitHub Pages. See `MIGRATION.md` for URL compatibility and migration details.
