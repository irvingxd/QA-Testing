import { type Locator , type Page, expect} from "@playwright/test";

export class ContactWebsite {
  readonly page: Page
    readonly contactLink: Locator;
    readonly aboutLink: Locator;
    readonly homeLink: Locator;

    constructor(page: Page) {
    this.page = page;
    //this.contactLink = page.locator('[href="/contact"]');
    //this.aboutLink = page.locator('[href="/about"]');
    //this.homeLink = page.locator('[href="/"]');
    this.contactLink = page.getByRole('link', { name: 'Contact' });
    this.aboutLink = page.getByRole('link', { name: 'About' });
    this.homeLink = page.getByRole('link', { name: 'Home' , exact: true });
  }
    async goto() {
    await this.page.goto('https://contact.testingthis1234.xyz/', { waitUntil: 'networkidle' });
  }
    async navigateToContact() {
    await this.contactLink.click();
  }
    async navigateToAbout() {
    await this.aboutLink.click();
    }
    async navigateToHome() {
    await this.homeLink.click();
    }
}

