# Open standards and interoperability: landing-site

meddleware.co.uk: what Meddleware is and what is available.

Served at `meddleware.co.uk`.

This page lists what the project speaks today, what is planned, what was considered and does not apply, where someone else can extend it, and what proves each claim. The platform-wide list is [Standards we use](https://meddleware.dev/platform/standards). A row appears there in the same change that turns a standard on.

## Spoken today

- Content Security Policy (W3C), sent as a header
- HTTP Strict Transport Security (RFC 6797)
- Web App Manifest (W3C)
- Robots Exclusion Protocol (RFC 9309) at /robots.txt
- llms.txt (a community convention, not a formal standard)
- WCAG 2.2 level AA with AAA contrast (W3C), tested on every change
- No cookie and no browser storage before an action, tested on every change
- RFC 3339 timestamps

## Planned

- /.well-known/security.txt (RFC 9116), which none of the public hosts serves yet except meddleware.link
- A sitemap (sitemaps.org protocol) and Open Graph link-preview tags (none are on the landing page, docs or dashboard today)
- One source for robots.txt and llms.txt (each repository carries its own copy today: 13 copies)
- schema.org JSON-LD for the organisation and the site, and a rel="me" link to the maintainer's profiles

## Considered, not applicable

- Sign-in with a platform account: wallet tools have no accounts; if a tool ever needs one, the browser uses a session held by a backend, with a __Host- cookie, and never holds tokens in script
- Atom, JSON Feed: the roadmap site publishes the changes

## Extension points

- The catalogue is data (src/tools.ts): a new tool is a new entry

## What proves it

- e2e/a11y.spec.ts
- tests of the role guide and the footer links

_Maintained centrally with the platform's interoperability map; changes go through it so every repository says the same thing._
