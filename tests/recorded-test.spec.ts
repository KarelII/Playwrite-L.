import { test, expect } from '@playwright/test';

test('test', async ({ page }) => {
  await page.goto('https://www.google.com/');
  await page.getByRole('button', { name: 'Odmítnout vše' }).click();
  await page.getByLabel('Najít').click();
  await page.getByLabel('Najít').fill('cute puppies');
  await page.keyboard.press('Enter');
  await expect(page).toHaveTitle(/cute puppies/)
});