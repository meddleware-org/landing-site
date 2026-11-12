import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vite'
import { meddlewareApp } from '@meddleware/frontend-config/vite'

// Two HTML entries over the same shell: the page, and the 404 page the server returns (with status 404) for unknown paths. Each has its own
// small entry module (main.ts, not-found.ts) around shared chunks. Dark is the brand default (a saved choice wins).
export default defineConfig(
  meddlewareApp({
    plugins: [vue()],
    wallet: false,
    name: 'Meddleware',
    config: { base: '/', build: { rollupOptions: { input: { main: 'index.html', notFound: '404.html' } } } },
  }),
)
