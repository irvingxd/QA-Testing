import {test, expect} from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { DashboardPage } from '../pages/Dashboard';
import { StartServerPage } from '../pages/StartServer';

test.use({ storageState: '.auth/user.json' });
let loginPage: LoginPage;
let dashboardPage: DashboardPage;
let startServerPage: StartServerPage;

test('Log-in screen cookie working', async ({ page }) => {
    loginPage = new LoginPage(page);
    dashboardPage = new DashboardPage(page);
    await page.goto('https://panel.irvingpoop.cloud');
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/')
    await page.waitForTimeout(2000);
    await expect(page).toHaveScreenshot('dashboard-cookie-working.png', { 
        fullPage: true,
        maxDiffPixels: 400,
    });
} );