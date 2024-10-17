import { test, expect } from '@playwright/test';

test('has title', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Expect a title "to contain" a substring.
  await expect(page).toHaveTitle(/Playwright/);
});

test('get started link', async ({ page }) => {
  await page.goto('https://playwright.dev/');
  // Click the get started link.
  const getStarted = page.getByRole('link', { name: 'Get started' });
  await getStarted.click();
  // Expects page to have a heading with the name of Installation.
  await expect(page.getByRole('heading', { name: 'Installation' })).toBeVisible();
});
test('test playwright code gen', async ({ page }) => {
  await page.goto('https://demo.playwright.dev/todomvc/#/');
  await page.getByPlaceholder('What needs to be done?').click();
  await page.locator('html').click();
  await expect(page.getByRole('heading', { name: 'todos' })).toBeVisible();
  await page.getByText('Double-click to edit a todo').click();
  await expect(page.getByRole('contentinfo')).toContainText('Double-click to edit a todo');
  await page.getByRole('link', { name: 'TodoMVC', exact: true }).click();
  await page.getByRole('banner').click();
  await page.getByText('Examples JavaScript Compile-').click();
  await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
  await expect(page.getByPlaceholder('What needs to be done?')).toBeEmpty();
});
