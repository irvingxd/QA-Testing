import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { StartServerPage } from '../../pages/StartServer';
import { DashboardPage } from '../../pages/Dashboard';

test.use({ storageState: '.auth/user.json' });
let loginPage: LoginPage;
let startServerPage: StartServerPage;
let dashboardPage: DashboardPage;

test('Start the Server', async ({ page }) => {
    loginPage = new LoginPage(page);
    startServerPage = new StartServerPage(page);
    dashboardPage = new DashboardPage(page);
    
    await page.goto('https://panel.irvingpoop.cloud');
    await startServerPage.navigateToServers('98ccf40f');
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/server/98ccf40f');
    await page.getByRole('button', { name: 'Start', exact: true }).click();
});
// works YIPPE missed dashboard