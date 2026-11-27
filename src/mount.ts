// The one function both entries use to mount a page: the shared shell (App.vue) around a single view. Related: src/main.ts and src/not-found.ts.
// Vue's application and render helpers.
import { createApp, h, type Component } from 'vue'
// The shared page shell: header, footer and colour mode.
import App from './App.vue'

/** Mount the page shell around one view. Each HTML entry (the page, the 404 page) calls this with its own view, so neither ships the other's code. */
export function mountPage(view: Component, selector = '#app'): void {
  // The shell with the view in its default slot.
  createApp({ render: () => h(App, null, { default: () => h(view) }) }).mount(selector)
}
