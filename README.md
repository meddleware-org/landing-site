# @meddleware/landing-site

The corporate landing page at [`meddleware.co.uk`](https://meddleware.co.uk), and the one host of the shared legal pages
(`https://meddleware.co.uk/legal/`): a Vue 3 + Vite site that presents the tool suite and links to the dashboard and the standalone tool
subdomains. It has no wallet, no blockchain SDK and no accounting logic, by design.

- **Stack:** Vue 3, Vite, `@meddleware/design-tokens`, `@meddleware/ui`.
- **Image:** `quay.io/meddleware-org/landing-site`, built on `quay.io/meddleware-org/static-server` (see `Dockerfile`; the CSP is a build argument).
- **Context for contributors and agents:** [CLAUDE.md](CLAUDE.md); the security review is `docs/audit/landing-site-audit.md`.
- **Licence:** BSD Zero Clause ([0BSD](LICENSE)).

## Develop

```bash
npm ci
npm run dev           # Vite dev server
npm test              # unit tests (Vitest)
npm run test:e2e      # Playwright sweep (E2E_BROWSERS=all adds Firefox, WebKit and two mobile profiles)
npm run lint && npm run type-check
npm run build && npm run check:csp
```
