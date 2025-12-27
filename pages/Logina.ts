// pages/Login.ts

import { Page, Locator } from '@playwright/test';

// Define the LoginPage class, which contains locators and methods
export class Login {
    // 1. Declare properties for Playwright's Page object and Locators
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorUsernameEmailRequired: Locator; 
    readonly errorAccountDetailsRequired: Locator;
    // 2. The constructor initializes the page object and all locators
    constructor(page: Page) {
        this.page = page;
        
        // **IMPORTANT:** You MUST update these locators to match panel.irvingpoop.cloud!
        // Use Codegen (npx playwright codegen panel.irvingpoop.cloud) to help find them.
        this.usernameInput = page.locator('input[name="username"]'); 
        this.passwordInput = page.locator('input[name="password"]'); 
        this.loginButton = page.getByRole('button', { name: 'Login' });
        
        // This locator is for checking error messages (e.g., text under the form or a banner)
        this.errorUsernameEmailRequired = page.getByText('A username or email must be'); 
        this.errorAccountDetailsRequired = page.getByText('Please enter your account');
    }

    // 3. Method to navigate to the login page
    async goto() {
        await this.page.goto('https://panel.irvingpoop.cloud');
    }

    // 4. Method to perform the login action (reusable)
    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    async submitEmpty() {
        await this.loginButton.click();
    }
}