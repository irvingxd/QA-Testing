import { type Locator, type Page } from "@playwright/test";

export class StartServerPage {
  readonly page: Page;
  readonly serverIP: Locator;
  readonly addressLabel: Locator;

  constructor(page: Page) {
    this.page = page;
    this.addressLabel = page.locator('div.flex-col').filter({ has: page.locator('p', { hasText: /^Address$/ }) });
    this.serverIP = this.addressLabel.locator('div.font-semibold');
  }

  async navigateToServers(serverId: string) {
    const serverLink = this.page.locator(`a[href*="${serverId}"]`);
    await serverLink.waitFor({ state: 'visible' });
    await serverLink.click();
  }
}