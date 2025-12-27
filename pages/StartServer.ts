import { type Locator , type Page, expect} from "@playwright/test";

export class StartServerPage {
  readonly page: Page;

    constructor(page: Page) {
    this.page = page;
  }
async navigateToServers() {
    await this.page.locator('a[href="/server/98ccf40f"]').click();
}
}
