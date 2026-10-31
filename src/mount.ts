import { createApp, h, type Component } from 'vue'
import App from './App.vue'

/** Mount the page shell around one view. Each HTML entry (the page, the 404 page) calls this with its own view, so neither ships the other's code. */
export function mountPage(view: Component, selector = '#app'): void {
  createApp({ render: () => h(App, null, { default: () => h(view) }) }).mount(selector)
}
