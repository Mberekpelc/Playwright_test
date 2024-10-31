import { expect, type Locator, type Page } from '@playwright/test';
import { LandingpageDev } from './Landingpage';

export class ArticleDevPage {
  readonly page: Page;
  readonly pomLink: Locator;
  readonly gettingStartedHeader: Locator;
  constructor(page: Page) {
    this.page = page;
    this.pomLink = page.locator('li', {
      hasText: 'Guides',
    }).locator('a', {
      hasText: 'Page Object Model',
    });
    this.gettingStartedHeader = page.locator('h1', { hasText: 'Installation' });
  }

  async pageObjectModel() {
    const getstarted = new LandingpageDev(this.page);
    await getstarted.getStarted();
    await expect(this.gettingStartedHeader).toBeVisible();
    await this.pomLink.click();
  }
}
