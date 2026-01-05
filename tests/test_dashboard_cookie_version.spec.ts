import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';
import { StartServerPage } from '../pages/StartServer';

test.use({ storageState: '.auth/user.json' });
let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let startServerPage: StartServerPage;

test('Dashboard Cookie Version', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    
    await page.goto('https://panel.irvingpoop.cloud');
    await dashboardPage.adminLink.click();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin');
});

test('Check Databases, Nodes, Users,', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    startServerPage = new StartServerPage(page);
    await page.goto('https://panel.irvingpoop.cloud');
    await dashboardPage.navigateToAdmin();
    await dashboardPage.databasesLink.click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/databases');
    await dashboardPage.nodesLink.click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/nodes');
    await dashboardPage.usersLink.click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/users');
} );

test('Navigate to Start Server Page', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    startServerPage = new StartServerPage(page);
    await page.goto('https://panel.irvingpoop.cloud');
    await dashboardPage.navigateToAdmin();
    await page.waitForTimeout(2000);
    await dashboardPage.serversLink.click();
    await page.waitForTimeout(2000);
    await startServerPage.navigateToServers();
    await expect(page).toHaveURL(/.*\/server\/98ccf40f/);
} );
test('Navigate to Settings Page', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await page.goto('https://panel.irvingpoop.cloud');
    await dashboardPage.navigateToAdmin();
    await page.waitForTimeout(2000);
    await dashboardPage.settingsLink.click();
    await page.waitForTimeout(2000);
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/settings');
} );
