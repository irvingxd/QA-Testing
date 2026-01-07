import {test, expect} from '@playwright/test';
import { ContactWebsite } from '../../pages/ContactWebsite';

let contactWebsite: ContactWebsite;

test.beforeEach(async ({page}) => {
    contactWebsite = new ContactWebsite(page);
    await contactWebsite.goto();
});

test('Contact Page Navigation Test', async ({page}) => {
    await contactWebsite.navigateToContact();
    await expect(page).toHaveURL('https://contact.testingthis1234.xyz/contact');
});

test('About Page Navigation Test', async ({page}) => {
    await contactWebsite.navigateToAbout();
    await expect(page).toHaveURL('https://contact.testingthis1234.xyz/about');
});
test('Home Page Navigation Test', async ({page}) => {
    await contactWebsite.navigateToHome();
    await expect(page).toHaveURL('https://contact.testingthis1234.xyz/');
});   