import { test, expect } from '@playwright/test';

test('Verify landing page title and URL', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL('https://playwright.dev/');
});
test('Navigate to Get Started page and verify heading', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  await expect(page).toHaveTitle(/Playwright/);
  await expect(page).toHaveURL('https://playwright.dev/');
});
test('Check for the Documentation', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const docLink = page.getByRole('link', { name: 'Docs' });
  await expect(docLink).toBeVisible();
});
test('Check for Discord', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const page2Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'Discord server' }).click();
  const page2 = await page2Promise;
  await expect(page2).toHaveURL(/discord.com/);
}
);test('Check for GitHub', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  const page1Promise = page.waitForEvent('popup');
  await page.getByRole('link', { name: 'GitHub repository' }).click();
  const page1 = await page1Promise;
  await expect(page1).toHaveURL(/github.com/);
});

test('Verify Landing Page Title and URL', async ({ page }) => {
  await page.goto('https://panel.irvingpoop.cloud/');
  await expect(page).toHaveTitle(/Pterodactyl/);
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud/auth/login');
});
test('Login form visibility', async ({ page }) => {
  await page.goto('https://panel.irvingpoop.cloud/');
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud/auth/login');
  const loginForm = page.getByRole('heading', { name: 'Login to Continue' });
  await expect(loginForm).toBeVisible(); 

});
test('Logging into Pterodactyl Panel', async ({ page }) => {
  await page.goto('https://panel.irvingpoop.cloud/');
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud/auth/login');
  await page.locator('input[name="username"]').fill('Shiveris');
  await page.locator('input[name="password"]').fill('shiveris');
  await page.getByRole('button', { name: 'Login' }).click();
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud/auth/login');
  await page.pause();
});
