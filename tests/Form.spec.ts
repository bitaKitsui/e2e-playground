import { test, expect } from '@playwright/test'

test.beforeEach(async ({ page }) => {
  await page.goto('http://localhost:3000/form')
})

test.describe('Form', () => {
  test('screenshot', async ({ page }) => {
    await expect(page).toHaveScreenshot({ fullPage: true })
  })
  test('フォームへ値を入力し、submit したとき、正しくページ遷移すること', async ({
    page,
  }) => {
    await page.locator('input[type=text]').fill('text')
    await page.locator('input[type=submit]').first().click()
    await expect(page.url()).toBe('http://localhost:3000/')
  })
  test('フォームへ値を入力していない場合、submit したとき、ページ遷移しないこと', async ({
    page,
  }) => {
    await page.locator('input[type=submit]').first().click()
    await expect(page).toHaveURL(/form/)
  })
})
