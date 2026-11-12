# Changelog

All notable changes to landing are documented here.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.1.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [0.0.23] - 2026-11-08

### Changed

- The company mark (the Kopimi "K", `BrandMark` from `@meddleware/ui` 0.1.41) replaces the `◆` stand-ins: before the name in the header, in the hero eyebrow, and as the large faint decoration behind the hero.
- The favicon set (SVG, ICO, Apple touch icon, 192/512 icons) and the web manifest come from the shared brand icons through `@meddleware/frontend-config` 0.0.8, on both the home page and the 404 page; the site's own `favicon.svg` is gone.
- Internal: `DO_NOT_TRACK=1` in both workflows; a built-site test (icon set once per page, no font file or third-party origin); `@meddleware/web-utils` ^0.0.4.

## [0.0.22] - 2026-11-07

### Changed

- The wording about where the tools run comes from the deployment records (`src/network.json`, checked in CI), so "mainnet is coming" becomes "live" with the records and not before.
- Configuration through `@meddleware/frontend-config` (Vite, Vitest, TypeScript, audit gate, licences, CSP check); the hero uses two spans instead of a line break.

## [0.0.21] - 2026-11-06

### Added

- `LICENSE` (0BSD) and a README.

### Changed

- Takes `@meddleware/ui` ^0.1.39 (the tab list items use `role="none"`) and the Dependabot merges of 2026-11-06: image bases `static-server` 0.1.12 and a refreshed `node` build image, and newer dev tools.

## [0.0.20] - 2026-11-05

### Changed

- Dependency alignment: `@meddleware/ui` ^0.1.38 (form-field edge contrast, sticky-offset and focus-not-obscured fixes), `@meddleware/design-tokens` ^0.1.13, `@meddleware/web-utils` ^0.0.2 and `@meddleware/frontend-config` ^0.0.2.

## [0.0.19] - 2026-10-31

- Colour mode switch, shared buttons and cards, canonical legal host

## [0.0.18] - 2026-10-30

- Dependency updates (minor and patch groups) and workflow action bumps. No source change.

## [0.0.17] - 2026-10-30

- Point the developer-docs and indexer links at the machine zone (ADR-0005); current @meddleware packages.

## [0.0.16] - 2026-10-24

### Changed

- Ships its own `robots.txt` (Content Signals `search=yes, ai-input=yes`) and `llms.txt` instead of static-server's defaults.

## [0.0.15] - 2026-10-24

### Fixed

- The image publish workflow pushed to the old repository name (`landing`); it now publishes `landing-site`, the name `config/images.yaml` pins. No code change.

## [0.0.14] - 2026-10-24

### Changed

- Renamed from `landing` to `landing-site` (workspace naming convention, `docs/architecture/ADR-0003-naming.md`). No code change beyond names, paths, hostnames and dependency names; the history below keeps the old names.

## [0.0.13] - 2026-10-22

### Changed

- Image base: static-server 0.1.11 (Go 1.26.10 standard library, CVE-2026-111943, so the scan-before-sign gate passes)

## [0.0.12] - 2026-10-18

### Added

- A real 404 page (`404.html`, a second Vite entry running the same app with a catch-all not-found view); the image serves it with status 404 for unknown paths (`NOT_FOUND_PAGE=/404.html`, no SPA fallback)
- Build-time inline-script check (`scripts/check-csp-inline.mjs`, `npm run check:csp`): the image build and CI fail if `dist/` carries an inline `<script>` the CSP does not allow
- Unit tests (`npm test`, vitest) for the inline-script check and the route table, run in CI and in the release gate
- Real-browser accessibility gate (`npm run test:e2e`, Playwright + axe): the home and 404 pages in every theme x season, and a load under the served CSP with no violation
- Container probe in CI (`scripts/smoke.sh`): the built image runs read-only and non-root; headers, bundle cache, licences, the 404 and the absent static-host files are checked

### Changed

- Depends on design-tokens ^0.1.10; image base moved to static-server 0.1.8
- CSP `connect-src`, `img-src` and `worker-src` narrowed to `'self'` (plus `data:` for images): the page makes no cross-origin request
- Footer links no longer dim with opacity (contrast was 4.12:1 in the dark footer; now the footer's own muted token)

### Removed

- The vestigial static-host files `public/_headers` and `public/CNAME` (they were served as plain files)

### Security

- The weaker, unused `script-src 'unsafe-inline'` policy in `_headers` is gone
