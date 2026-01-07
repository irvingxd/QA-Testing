import { test, expect } from '@playwright/test';
import { LoginPage } from '../../pages/LoginPage';
import { DashboardPage } from '../../pages/Dashboard';
import { StartServerPage } from '../../pages/StartServer';

test.use({ storageState: '.auth/user.json' });

test.describe('Admin Dashboard Navigation', () => {
    let dashboardPage: DashboardPage;
    let startServerPage: StartServerPage;
    const TARGET_SERVER_ID = '98ccf40f';

    test.beforeEach(async ({ page }) => {
        dashboardPage = new DashboardPage(page);
        startServerPage = new StartServerPage(page);
        await page.goto('https://panel.irvingpoop.cloud');
    });

    test('Dashboard Cookie Version', async ({ page }) => {
        await dashboardPage.adminLink.click();
        await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin');
    });

    test('Check Databases, Nodes, Users', async ({ page }) => {
        await dashboardPage.navigateToAdmin();
        
        await dashboardPage.databasesLink.click();
        await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/databases');
        
        await dashboardPage.nodesLink.click();
        await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/nodes');
        
        await dashboardPage.usersLink.click();
        await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/users');
    });

    test('Navigate to Start Server Page', async ({ page }) => {
        await dashboardPage.navigateToAdmin();
        
        await dashboardPage.serversLink.waitFor({ state: 'visible' });
        await dashboardPage.serversLink.click();

        await startServerPage.navigateToServers(TARGET_SERVER_ID);
        
        await expect(page).toHaveURL(new RegExp(TARGET_SERVER_ID));
    });

    test('Navigate to Settings Page', async ({ page }) => {
        await dashboardPage.navigateToAdmin();
        
        await dashboardPage.settingsLink.waitFor({ state: 'visible' });
        await dashboardPage.settingsLink.click();

        await expect(page).toHaveURL('https://panel.irvingpoop.cloud/admin/settings');
    });
});