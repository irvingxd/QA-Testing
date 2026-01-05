import { type Locator , type Page, expect} from "@playwright/test";

export class StartServerPage {
  readonly page: Page;
  readonly serverIP: Locator;

    constructor(page: Page) {
    this.page = page;
    this.serverIP = page.locator('div').filter({ hasText: /^(\d{1,3}\.){3}\d{1,3}:\d+$/ }).first(); 
   }
async navigateToServers() {
    const serverLink = this.page.locator('a[href*="98ccf40f"]');
    await serverLink.waitFor({ state: 'visible', timeout: 10000 });
    await serverLink.click();
}
}
