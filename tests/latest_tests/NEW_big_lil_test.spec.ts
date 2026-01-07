import { test, expect } from '@playwright/test';
import { StartServerPage } from '../../pages/StartServer';

test.describe('Server Dashboard Management', () => {
    let startServerPage: StartServerPage;
    const TARGET_SERVER_ID = '98ccf40f';

    test.beforeEach(async ({ page }) => {
        startServerPage = new StartServerPage(page);
        await page.goto('https://panel.irvingpoop.cloud');
    });

    test('checking server address', async ({ page }) => {
        await startServerPage.navigateToServers(TARGET_SERVER_ID);
        await expect(page).toHaveURL(new RegExp(TARGET_SERVER_ID));
        const ipPattern = /^(\d{1,3}\.){3}\d{1,3}:\d+$/;
        await expect(startServerPage.serverIP).toHaveText(ipPattern);
        await expect(startServerPage.addressLabel).toHaveScreenshot('server-address-masked.png', {
            mask: [startServerPage.serverIP],
            animations: 'disabled',
            maxDiffPixelRatio: 0.1
        });
    });

    test('checking that server itself works', async ({ page }) => {
        await startServerPage.navigateToServers(TARGET_SERVER_ID);
                const box = await startServerPage.addressLabel.boundingBox();
        expect(box?.width).toBeLessThan(400); 
        await expect(startServerPage.addressLabel).toBeVisible();
    });
});