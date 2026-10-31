import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import { themeInit, viteTarget } from '@meddleware/frontend-config/vite'

export default defineConfig({
  base: '/',
  // Dark is the brand default (a saved choice wins); the colour mode and the season are applied before first paint.
  plugins: [vue(), themeInit({ default: 'dark' })],
  build: {
    target: viteTarget(),
    // Two HTML entries over the same shell: the page, and the 404 page the server returns (with status 404) for unknown paths. Each
    // has its own small entry module (main.ts, not-found.ts) around shared chunks.
    rollupOptions: {
      input: { main: 'index.html', notFound: '404.html' },
    },
  },
})
