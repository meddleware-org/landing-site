// @vitest-environment jsdom
// The two pages (the home page and the 404 page) are the same shell around different content: a skip link first, a header, one main
// with one heading, the footer with the legal link on this origin, the colour-mode control, and the links the page claims to have.
import { describe, expect, it } from 'vitest'
import { mount } from '@vue/test-utils'
import { readdirSync, readFileSync, statSync } from 'node:fs'
import { join } from 'node:path'
import App from '../src/App.vue'
import HomeView from '../src/views/HomeView.vue'
import NotFoundView from '../src/views/NotFoundView.vue'
import { TOOLS } from '../src/tools'

const page = (view: typeof HomeView) => mount(App, { slots: { default: view } })

describe.each([
  ['home', HomeView, 'Tooling for the decentralised web'],
  ['404', NotFoundView, 'Page not found'],
])('the %s page', (_name, view, heading) => {
  const w = page(view)

  it('has one page heading, inside the main landmark', () => {
    expect(w.findAll('h1')).toHaveLength(1)
    expect(w.get('main h1').text().replace(/\s+/g, ' ')).toBe(heading)
  })

  it('starts with a skip link to the main landmark', () => {
    const skip = w.get('a')
    expect(skip.attributes('href')).toBe(`#${w.get('main').attributes('id')}`)
  })

  it('shows the company mark before the name in the header link, which keeps its accessible name', () => {
    const brand = w.get('header a[aria-label="Meddleware home"]')
    expect(brand.attributes('href')).toBe('/')
    expect(brand.text()).toBe('Meddleware')
    const mark = brand.get('svg.mw-brand-mark')
    expect(mark.attributes('aria-hidden')).toBe('true')
    expect(brand.element.firstElementChild).toBe(mark.element)
  })

  it('has a header with the site navigation, the colour-mode control, and a footer', () => {
    expect(w.get('header nav[aria-label="Site"]').findAll('a').map((a) => a.text())).toEqual(['Dashboard', 'Docs'])
    expect(w.findAll('header button').length).toBeGreaterThanOrEqual(3) // light, dark, system
    expect(w.find('footer').exists()).toBe(true)
  })

  it('serves the legal documents from its own origin (it is their canonical host)', () => {
    expect(w.get('footer a[href^="/legal/"]').attributes('href')).toMatch(/^\/legal\//)
  })

  it('gives the footer the documentation links through the footer itself', () => {
    // (links are normalised by safeHref: a bare origin gains its trailing slash)
    expect(w.findAll('footer nav a').map((a) => a.attributes('href'))).toEqual(['https://docs.meddleware.co.uk/', 'https://meddleware.dev/'])
  })
})

describe('the home page content', () => {
  const w = page(HomeView)

  it('has a card per tool, each a link to that tool', () => {
    const cards = w.findAll('li').filter((li) => li.find('h3').exists())
    expect(cards.map((c) => c.get('h3').text())).toEqual(TOOLS.map((t) => t.title))
    for (const [i, tool] of TOOLS.entries()) {
      expect(cards[i]!.get('h3 a').attributes('href')).toBe(new URL(tool.href).href)
      expect(cards[i]!.text()).toContain(tool.description)
    }
  })

  it('hides the decorative icons from assistive technology', () => {
    for (const li of w.findAll('li').filter((l) => l.find('h3').exists())) expect(li.find('[aria-hidden="true"]').exists()).toBe(true)
  })

  it('offers the dashboard and the docs as buttons, and marks the docs as opening a new tab', () => {
    const docs = w.findAll('a').filter((a) => a.attributes('href') === 'https://docs.meddleware.co.uk/' && a.text().includes('↗'))
    expect(docs.length).toBeGreaterThan(0)
    for (const a of docs) expect(a.attributes('rel')).toBe('noopener noreferrer')
  })

  it('has no inline style attributes', () => {
    expect(w.html()).not.toMatch(/\sstyle="/)
  })
})

describe('the hero', () => {
  const w = page(HomeView)

  it('uses the company mark in the eyebrow and as the large faint decoration, both hidden from assistive technology', () => {
    const eyebrow = w.get('.eyebrow')
    expect(eyebrow.text()).toBe('On-chain tooling')
    expect(eyebrow.get('svg.mw-brand-mark').attributes('aria-hidden')).toBe('true')
    const glyph = w.get('svg.glyph')
    expect(glyph.classes()).toContain('mw-brand-mark')
    expect(glyph.attributes('aria-hidden')).toBe('true')
  })
})

describe('the brand', () => {
  const sources = (dir: string): string[] =>
    readdirSync(dir).flatMap((n) => (statSync(join(dir, n)).isDirectory() ? sources(join(dir, n)) : [join(dir, n)]))

  it('has no diamond stand-in left in the sources', () => {
    for (const f of sources('src')) expect(readFileSync(f, 'utf8'), f).not.toContain('◆')
  })

  it('keeps no icon of its own: the favicon set comes from the shared brand icons', () => {
    expect(sources('public').filter((f) => /favicon/.test(f))).toEqual([])
    for (const f of ['index.html', '404.html']) expect(readFileSync(f, 'utf8'), f).not.toMatch(/rel="icon"/)
  })
})

describe('the tool list', () => {
  it('links only to https addresses', () => {
    for (const t of TOOLS) expect(t.href).toMatch(/^https:\/\//)
  })
})
