import { test, expect } from '@playwright/test';
import { LoginPage } from '../pages/LoginPage';
import { StartServerPage } from '../pages/StartServer';

let loginPage: LoginPage;
let startServerPage: StartServerPage;

test('Start the Server', async ({ page }) => {
    loginPage = new LoginPage(page);
    startServerPage = new StartServerPage(page);

   
    await loginPage.goto();
    await loginPage.login(
        process.env.LOGIN_USERNAME!,
        process.env.LOGIN_PASSWORD!
    ); 
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud');

    await startServerPage.navigateToServers();
    await expect(page).toHaveURL('https://panel.irvingpoop.cloud/server/98ccf40f');
    const startButton = page.getByRole('button', { name: 'Start', exact: true });
    const stopButton = page.getByRole('button', { name: 'Stop', exact: true });
    const killButton = page.getByRole('button', { name: 'Kill', exact: true });

  if (await stopButton.isVisible()) {
        await stopButton.click();
        await expect(killButton).toBeVisible({ timeout: 300 });
        await page.getByRole('button', { name: 'Continue', exact: true }).click();
    }
    else {await startButton.click();
        await expect(stopButton).toBeVisible({ timeout: 300 });
        
    }
});
    