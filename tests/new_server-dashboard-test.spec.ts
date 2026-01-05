import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';
import { StartServerPage } from '../pages/StartServer';

test.use({ storageState: '.auth/user.json' });

test.describe('Server Testing', () => {
    let loginPage;
    let dashboardPage;
    let startServerPage;

    test('Server Details Masking', async ({ page }) => {
        loginPage = new LoginPage(page);
        dashboardPage = new DashboardPage(page);
        startServerPage = new StartServerPage(page);
        
        await page.goto('https://panel.irvingpoop.cloud');

        await startServerPage.navigateToServers();
        await expect(page).toHaveURL(/.*\/server\/98ccf40f/);
        const ipLocator = startServerPage.serverIP;
        
        await expect(ipLocator).toBeVisible({ timeout: 10000 });

        const serverDetails = ipLocator.locator('..');

        await expect(serverDetails).toHaveScreenshot('new.png', {
            maxDiffPixels: 200, 
            mask: [ipLocator],
        });
    });
});