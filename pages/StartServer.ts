import { type Locator , type Page, expect} from "@playwright/test";

export class StartServerPage {
  readonly page: Page;

    constructor(page: Page) {
    this.page = page;
  }
async navigateToServers() {
    const serverLink = this.page.locator('a[href*="98ccf40f"]');
    await serverLink.waitFor({ state: 'visible', timeout: 10000 });
    await serverLink.click({force: true});
}
}
