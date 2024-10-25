import{test , expect} from '@playwright/test';
//install Axebuilder and import the test
import AxeBuilder from '@axe-core/playwright';

test("basics accessibility", async ({page}, testInfo)=>{
   await page.goto("https://commitquality.com/practice-api");
   await page.locator('.back-link').waitFor();
   const axeBuilder = await new AxeBuilder ({page})
   //.include('.back-link') to test a specific element or part of the page
   .withTags(["wcag2a","wcag2aa","wcag21a","wcag21aa"])
   .disableRules(["region"])
   .exclude('#element-with-known-issue')
   .analyze();
   //to add result to json
   await testInfo.attach('accessibility-scan-results', {
      body: JSON.stringify(axeBuilder, null, 2),
      contentType: 'application/json'
    });
   expect(axeBuilder.violations).toEqual([]);
});