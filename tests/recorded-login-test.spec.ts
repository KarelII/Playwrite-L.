import { test, expect } from '../src/fixtures';

test('failed login', async ({ page, app }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await app.login.usernameInput.fill('student');
  await app.login.passwordInput.fill('student');
  await app.login.submitButton.click();
  await expect(app.login.error).toContainText('Your password is invalid!');
});

test('successful login', async ({ page, app }) => {
  await page.goto('https://practicetestautomation.com/practice-test-login/');
  await app.login.usernameInput.fill('student');
  await app.login.passwordInput.fill('Password123');
  await app.login.submitButton.click();
  await expect(app.login.heading).toContainText('Logged In Successfully');
  await app.login.logOutButton.click();
  await expect(app.login.title).toContainText('Test login');
})