import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://panel.irvingpoop.cloud/auth/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Shiveris');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('shiveris');
  await page.locator('input[name="password"]').press('Enter');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link').nth(2).click();
});