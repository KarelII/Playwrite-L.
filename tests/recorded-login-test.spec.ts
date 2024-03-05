import { test, expect } from '@playwright/test';

test('failed login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('student');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.locator('#error')).toContainText('Your password is invalid!');
});

test('successful login', async ({ page }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await page.getByLabel('Username').click();
  await page.getByLabel('Username').fill('student');
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('Password123');
  await page.getByRole('button', { name: 'Submit' }).click();
  await expect(page.getByRole('heading')).toContainText('Logged In Successfully');
  await page.getByRole('link', { name: 'Log out' }).click();
  await expect(page.locator('h2')).toContainText('Test login');
})