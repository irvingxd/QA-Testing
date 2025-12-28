import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage'; // Import your new class

test('Login via Page Object Model', async ({ page }) => {
  const loginPage = new LoginPage(page);

  // Use the methods from your class
  await loginPage.goto();
      await loginPage.login(
        process.env.LOGIN_USERNAME!,
        process.env.LOGIN_PASSWORD!
    );  
  // Assertions still happen in the test
  await expect(page).toHaveURL('https://panel.irvingpoop.cloud');
});
