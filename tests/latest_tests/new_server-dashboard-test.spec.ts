import { test, expect } from '@playwright/test';
import { StartServerPage } from '../../pages/StartServer';


test.describe('Server Dashboard: Visual Validations', () => {
    let startServerPage: StartServerPage;
    const TARGET_SERVER_ID = '98ccf40f';

    test.use({ storageState: '.auth/user.json' });

    test.beforeEach(async ({ page }) => {
        startServerPage = new StartServerPage(page);
        await page.goto('https://panel.irvingpoop.cloud');
    });

    test('should mask server IP address in status snapshots', async ({ page }) => {
        await startServerPage.navigateToServers(TARGET_SERVER_ID);
        await expect(page).toHaveURL(new RegExp(TARGET_SERVER_ID));

        const ipValue = startServerPage.serverIP;
        const container = startServerPage.addressLabel;

        await expect(ipValue).toBeVisible({ timeout: 10000 });
        await expect(ipValue).not.toBeEmpty();

        await expect(container).toHaveScreenshot('server-address-card.png', {
            maxDiffPixels: 200,
            animations: 'disabled', 
            mask: [ipValue],        
        });
    });
});