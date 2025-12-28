import      { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';

let loginPage: LoginPage;
let dashboardPage: DashboardPage;

test('Dashboard Navigation Test', async ({ page }) => {
  loginPage = new LoginPage(page);
  dashboardPage = new DashboardPage(page);

    await loginPage.goto();
    await loginPage.login(
        process.env.LOGIN_USERNAME!,
        process.env.LOGIN_PASSWORD!
    ); 
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud');


    await dashboardPage.adminLink.click();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin');

    await dashboardPage.navigateToUsers();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/users');
});