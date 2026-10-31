# CLAUDE.md — @meddleware/landing-site

## What this app is

A Vue 3 + Vite SPA serving as the corporate landing page at `meddleware.co.uk`. It presents
Meddleware's tool suite to first-time visitors and links them to the chain-agnostic dashboard
(`dash.meddleware.co.uk`) and standalone tool subdomains.

The landing page has **no wallet, no blockchain SDK, no accounting logic** — it is a pure
marketing/navigation page. Keep it that way.

## Architecture

```
src/
  main.ts / not-found.ts  The entries of index.html and 404.html: tokens, seasons, the ui reset, then mountPage(view)
  mount.ts            mountPage(view): the shell (App) around one view
  App.vue             UiAppShell (skip link, <main>) + AppHeader (transparent; site links, ColorModeControl) + AppFooter (dark)
  tools.ts            The tools shown on the page: one card each
  views/
    HomeView.vue      Composes HeroSection + FeaturesGrid + CtaSection
    NotFoundView.vue  The 404 page content
  components/
    HeroSection.vue   Full-viewport hero with gradient, headline, UiButton CTAs
    FeaturesGrid.vue  A UiCard (a link through its title) per entry of tools.ts
    CtaSection.vue    Secondary CTA strip with dashboard and docs links
  styles/main.css     Link underline offset and smooth in-page scrolling (the rest is the ui reset)
  env.d.ts            Vite client types + *.vue shim
```

## Styling rules

All colours and spacing come from `@meddleware/design-tokens` role tokens (`--bg`, `--surface`,
`--text`, `--muted`, `--accent`, `--border`, `--focus-ring`, `--space-*`, `--font-size-*`,
`--tracking-*`). Never hardcode hex/rem values — see `@meddleware/ui` CLAUDE.md for the full
theming contract.

The hero gradient uses `color-mix(in srgb, var(--accent) 12%, transparent)` to produce a
subtle radial wash without referencing any colour-named ramps.

## Adding a new tool card

Add an entry to the `tools` array in `src/components/FeaturesGrid.vue`:

```ts
{
  icon: '⚙',
  title: 'New Tool',
  description: 'One or two sentences.',
  href: 'https://new-tool.meddleware.co.uk',
}
```

## Deployment

Served by `static-server` in k8s namespace `apps`, service name `landing`, port 80.
Ingress: `meddleware.co.uk` → `post-bootstrap/landing-site/base/ingress.yaml`.
Cloudflare Tunnel: `meddleware.co.uk` → `https://nginx-ingress-controller.nginx-ingress.svc:443`
(No TLS Verify; HTTP Host Header `meddleware.co.uk`).

**This site is the one canonical host of the legal documents** (`public/legal/`, served at `https://meddleware.co.uk/legal/`). Every other
app links to them there (`CopyrightLine`'s default `legalBase`) and ships no copy; here the footer uses `legal-base="/legal/"` so they are
served from this origin. Do not delete `public/legal/` here.

**No router.** The page is one route, so there is no vue-router: `index.html` and `404.html` are two entries (`main.ts`, `not-found.ts`)
over the same shell, and the server answers an unknown path with `404.html` and a real 404 status.

**Dark is the brand default** (`themeInit({ default: 'dark' })` in `vite.config.ts` applies it before first paint, and `useColorMode('dark')`);
the header has the colour-mode control and a visitor's saved choice always wins.

## Build

```bash
npm install
npm run type-check  # vue-tsc
npm run build       # type-check + vite build → dist/
npm run dev         # local dev server at http://localhost:5173
npm test            # vitest: inline-script check, route table
npm run check:csp   # after build: no inline script that the Dockerfile CSP forbids
npm run test:e2e    # Playwright + axe (contrast, theme x season) and a no-violation load under the CSP
bash scripts/smoke.sh <image>   # container probe (CONTAINER_ENGINE=podman for rootless)
```
