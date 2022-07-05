import { test, expect } from '@playwright/test'

test.describe('Form', () => {
  test('存在しない URL を指定した場合、 NotFound 画面へ遷移すること', async ({
    page,
  }) => {
    await page.goto('http://localhost:3000/foobar')
    await expect(page).toHaveURL(/not-found/)
  })
})
