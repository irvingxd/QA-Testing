import { test as setup, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import path from 'path';
import fs from 'fs';

const authFile = path.join(__dirname, '../.auth/user.json');

setup('authenticate', async ({ page }) => {
  const authDir = path.dirname(authFile);
  if (!fs.existsSync(authDir)) {
    fs.mkdirSync(authDir, { recursive: true });
  }

  const loginPage = new LoginPage(page);
  await loginPage.goto();
  await loginPage.login(process.env.LOGIN_USERNAME!, process.env.LOGIN_PASSWORD!);
  await page.waitForURL('https://panel.irvingpoop.cloud');
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud');
  await page.context().storageState({ path: authFile });
});