import vue from '@vitejs/plugin-vue'
import { defineConfig } from 'vitest/config'
import { vueTestConfig } from '@meddleware/frontend-config/vitest'

// Unit tests (tests/): the build-time inline-script check and the two pages. The real-browser accessibility gate lives in e2e/ and
// runs under Playwright (npm run test:e2e), not here.
export default defineConfig(vueTestConfig({ plugins: [vue()] }))
