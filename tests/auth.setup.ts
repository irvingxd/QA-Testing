import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';
import fs from 'fs'; // Add this import

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  // NEW: Create the .auth folder if it doesn't exist
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);

  await expect(page).toHaveURL('https://panel.irvingpoop.cloud');

  // This line CREATES the user.json file
  await page.context().storageState({ path: authFile });
});