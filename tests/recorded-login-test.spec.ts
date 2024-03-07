import { test, expect } from '../src/fixtures';

/**
 * This test suite was recorded with the Playwright Test recorder 
 * and then modified to use Object Repository class
 * this approach is possible, but a bit more chaotic than using Page Object Model
 * because when the Object repository is huge, it becomes hard to manage, 
 * also no automatic updates when something is changed in the object repository, so possibly it means lot of code repairs
 */
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
  await expect(app.dashboard.heading).toContainText('Logged In Successfully');
  await app.dashboard.logOutButton.click();
  await expect(app.login.title).toContainText('Test login');
})