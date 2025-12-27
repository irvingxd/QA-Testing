import { test, expect } from '@playwright/test';
test.beforeEach(async ({ page }) => {
  // Navigate to the login page before each test
  await page.goto('https://panel.irvingpoop.cloud/auth/login');
  
}
);

test('Verify Landing Page Title and URL', async ({ page }) => {
  await expect(page).toHaveTitle(/Pterodactyl/);
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/auth/login');
});

test('ReCAPTCHA verification', async ({ page }) => {
    const usernameInput = page.locator('input[name="username"]');
    await usernameInput.fill('Shiveris');
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('shiveris');
    const loginButton = page.getByRole('button', { name: 'Login' });  
    await loginButton.click();
    const recaptcha = page.locator('iframe[title="reCAPTCHA"]');
    await expect(recaptcha).toBeVisible();
});

