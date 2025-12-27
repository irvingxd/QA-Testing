import { type Locator , type Page, expect} from "@playwright/test";


export class DashboardPage {
  readonly page: Page;
  readonly adminLink: Locator;
  readonly databasesLink: Locator;
  readonly usersLink: Locator;
  readonly nodesLink: Locator;
  readonly settingsLink: Locator;

    constructor(page: Page) {
    this.page = page;
    this.adminLink = page.locator('a[href="/admin"]').first();
    this.databasesLink = page.getByRole('link', { name: /Databases/ });
    this.usersLink = page.getByRole('link', { name: /Users/ });
    this.nodesLink = page.getByRole('link', { name: /Nodes/ });
    this.settingsLink = page.getByRole('link', { name: /Settings/ });
  }
    async goto() {
    await this.adminLink.click();
  }  


    async navigateToAdmin() {
    await this.page.locator('a[href="/admin/databases"]').click();
  }
  async navigateToUsers() {
    await this.usersLink.click();
  }     
}
