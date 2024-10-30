import { expect, type Locator, type Page } from '@playwright/test';
import { LandingpageDev } from './Landingpage';

export class ArticleDevPage {
  readonly page: Page;
  readonly pomLink: Locator;
  readonly tocList: Locator;
  constructor(page: Page) {
    this.page = page;
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
  }



  async pageObjectModel() {
    const getstarted = new LandingpageDev(this.page);
    await getstarted.getStarted();
    await this.pomLink.click();
  }
}
