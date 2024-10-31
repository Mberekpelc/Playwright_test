import { test, expect } from '@playwright/test';
import { ArticleDevPage } from '../Articlepage.ts';
import { LandingpageDev } from "../Landingpage.ts";

test('getting started should contain table of contents', async ({ page }) => {
  const playwrightDev = new LandingpageDev(page);
  await playwrightDev.goto();
  await playwrightDev.getStarted();
  await expect(playwrightDev.gettingStartedHeader).toBeVisible();
  await expect(playwrightDev.tocList).toHaveText([
    `How to install Playwright`,
    `What's Installed`,
    `How to run the example test`,
    `How to open the HTML test report`,
    `Write tests using web first assertions, page fixtures and locators`,
    `Run single test, multiple tests, headed mode`,
    `Generate tests with Codegen`,
    `See a trace of your tests`
  ]);
});

test('should show Page Object Model article', async ({ page }) => {
  const Landingpage = new LandingpageDev(page);
  const Articlepage = new ArticleDevPage(page);
  await Landingpage.goto();
  await Articlepage.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});