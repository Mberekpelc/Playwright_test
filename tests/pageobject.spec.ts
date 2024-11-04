import { test, expect,test1} from '../Fixtures.ts';
// import { ArticleDevPage } from '../Articlepage.ts';
// import { LandingpageDev } from "../Landingpage.ts";

test('getting started should contain table of contents', async ({ LandingpageDev}) => {
  // const playwrightDev = new LandingpageDev(page); //this is by using page object instead of fixtures
  await LandingpageDev.goto();
  await LandingpageDev.getStarted();
  await expect(LandingpageDev.gettingStartedHeader).toBeVisible();
  await expect(LandingpageDev.tocList).toHaveText([
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

test('should show Page Object Model article', async ({ page, ArticleDevPage, LandingpageDev }) => {
  // const Landingpage = new LandingpageDev(page); //this is by using page object instead of fixtures
  // const Articlepage = new ArticleDevPage(page);
  await LandingpageDev.goto();
  await ArticleDevPage.pageObjectModel();
  await expect(page.locator('article')).toContainText('Page Object Model is a common pattern');
});

test1("test fixtures with supplied data", async({Username, Password, Age})=>{
  Username = "Testing02";
  console.log(Username, Password, Age + 8);

})