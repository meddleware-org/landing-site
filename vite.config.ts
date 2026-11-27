// Vite configuration: the fleet's shared application settings with the Vue plugin, no wallet, and the two HTML entries. `npm run dev` and `npm run build` read it.
// The Vue single-file-component plugin.
import vue from '@vitejs/plugin-vue'
// Vite's typed configuration helper.
import { defineConfig } from 'vite'
// The fleet's shared application settings.
import { meddlewareApp } from '@meddleware/frontend-config/vite'

// Two HTML entries over the same shell: the page, and the 404 page the server returns (with status 404) for unknown paths. Each has its own
// small entry module (main.ts, not-found.ts) around shared chunks. Dark is the brand default (a saved choice wins).
// The fleet's settings with the Vue plugin and no wallet.
export default defineConfig(
  meddlewareApp({
    plugins: [vue()],
    wallet: false,
    name: 'Meddleware',
    // Served from the root; two HTML entries.
    config: { base: '/', build: { rollupOptions: { input: { main: 'index.html', notFound: '404.html' } } } },
  }),
)
