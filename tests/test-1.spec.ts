import { test, expect } from '@playwright/test';
//test using the playwright codegen
test('test', async ({ page }) => {
  await page.goto('https://www.bjss.com/');
  await page.getByRole('button', { name: 'Allow all' }).click();
  await expect(page.getByRole('link', { name: 'What we do' }).first()).toBeVisible();
  await expect(page.getByRole('banner')).toContainText('Contact Us');
});