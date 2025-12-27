// pages/Login.ts (CORRECTED)

import { Page, Locator } from '@playwright/test';

export class Login {
    readonly page: Page;
    readonly usernameInput: Locator;
    readonly passwordInput: Locator;
    readonly loginButton: Locator;
    readonly errorUsernameEmailRequired: Locator;
    readonly errorAccountDetailsRequired: Locator;
    
    constructor(page: Page) {
        this.page = page;
        
        this.usernameInput = page.locator('input[name="username"]'); 
        this.passwordInput = page.locator('input[name="password"]'); 
        this.loginButton = page.getByRole('button', { name: 'Login' });
        
        this.errorUsernameEmailRequired = page.getByText('A username or email must be'); 
        this.errorAccountDetailsRequired = page.getByText('Please enter your account');
    }

    async goto() {
        await this.page.goto('https://panel.irvingpoop.cloud/auth/login');
    }

    async login(username: string, password: string) {
        await this.usernameInput.fill(username);
        await this.passwordInput.fill(password);
        await this.loginButton.click();
    }
    
    async submitEmpty() {
        await this.loginButton.click();
    }
}