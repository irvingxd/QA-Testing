import      { test, expect } from '@playwright/test';

test.beforeAll(async ({ page }) => {
  // Navigate to the login page before all tests
    await page.goto('https://panel.irvingpoop.cloud/auth/login');
    const usernameInput = page.locator('input[name="username"]');
    await usernameInput.fill('Shiveris');
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('shiveris');
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud');
    await page.getByRole('link').nth(2).click();

});

test.beforeEach(async ({ page }) => {
   // Navigate to the login page before each test
    await page.goto('https://panel.irvingpoop.cloud/auth/login');
    const usernameInput = page.locator('input[name="username"]');
    await usernameInput.fill('Shiveris');
    const passwordInput = page.locator('input[name="password"]');
    await passwordInput.fill('shiveris');
    const loginButton = page.getByRole('button', { name: 'Login' });
    await loginButton.click();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud');
    await page.getByRole('link').nth(2).click();
});


test('Checking Databases Link Presence', async ({ page }) => {
    const databasesLink = page.getByRole('link', { name: /Databases/ });
    await page.waitForTimeout(500);
    await databasesLink.click();
    await expect(databasesLink).toBeVisible();
});

test('Checking Nodes Link Presence', async ({ page }) => {
    const nodesLink = page.getByRole('link', { name: /Nodes/ });
    await nodesLink.click();
    await expect(nodesLink).toBeVisible();
});
test('Checking Users Link Presence', async ({ page }) => {
    const usersLink = page.getByRole('link', { name: /Users/ });
    await usersLink.click();
    await expect(usersLink).toBeVisible();
});

test('Checking Settings Link Presence', async ({ page }) => {
    const settingsLink = page.getByRole('link', { name: /Settings/ });
    await settingsLink.click();
    await expect(settingsLink).toBeVisible();
});