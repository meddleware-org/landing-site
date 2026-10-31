import type { Page } from '@playwright/test'

/** The page and the 404 page (the server answers an unknown path with `/404.html` and a 404 status). */
export const open = (path: string) => async (page: Page) => {
  await page.goto(path)
  await page.getByRole('heading', { level: 1 }).waitFor()
}
