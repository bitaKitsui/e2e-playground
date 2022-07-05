import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/')
})

test.describe('HelloWorld', () => {
  test('screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true })
  })
  test('Form へのリンクをクリックしたとき、正しくページ遷移すること', async ({
    page,
  }) => {
    await page.locator('a', { hasText: 'Form' }).first().click()
    await expect(page).toHaveURL(/form/)
  })
})
