import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://panel.irvingpoop.cloud/auth/login');
  await page.locator('input[name="username"]').click();
  await page.locator('input[name="username"]').fill('Irving');
  await page.locator('input[name="password"]').click();
  await page.locator('input[name="password"]').fill('Mantas123456789@');
  await page.getByRole('button', { name: 'Login' }).click();
  await page.getByRole('link', { name: 'Project Zomboid 168.231.127.' }).click();
  await page.getByRole('link', { name: 'Project Zomboid 168.231.127.' }).click();
});