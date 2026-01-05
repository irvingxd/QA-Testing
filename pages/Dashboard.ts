import { type Locator , type Page, expect} from "@playwright/test";


export class DashboardPage {
  readonly page: Page;
  readonly adminLink: Locator;
  readonly databasesLink: Locator;
  readonly usersLink: Locator;
  readonly nodesLink: Locator;
  readonly settingsLink: Locator;
  readonly serversLink: Locator;

    constructor(page: Page) {
    this.page = page;
    this.adminLink = page.locator('a[href="/admin"]').first();
    this.databasesLink = page.getByRole('link', { name: /Databases/ });
    this.usersLink = page.getByRole('link', { name: /Users/ });
    this.nodesLink = page.getByRole('link', { name: /Nodes/ });
    this.settingsLink = page.getByRole('link', { name: /Settings/ });
    this.serversLink = page.getByRole('link', { name: /Servers/ }); // naujas selktorius
  }
    async goto() {
    await this.adminLink.click();
  }  
    async navigateToAdmin() {
    await this.page.locator('a[href="/admin"]').click();
  }
  async navigateToUsers() {
    await this.usersLink.click();
  }
  async navigateToDatabases() {
    await this.databasesLink.click();
  }
  async navigateToNodes() {
    await this.nodesLink.click();
  }
  async navigateToSettings() {
    await this.settingsLink.click();
  }
  async navigateToServers() {
    await this.serversLink.click();
  }
}
