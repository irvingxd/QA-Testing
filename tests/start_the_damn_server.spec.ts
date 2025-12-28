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
    await page.getByRole('button', { name: 'Start', exact: true }).click();

});