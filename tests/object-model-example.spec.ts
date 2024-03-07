import { test } from '../src/fixtures';

/**
 * This test suite is an example of how to use Page Object Model with Playwright
 * method login with uses typescript generics to select correct credentials
 * 
 * test.step is used to create a new step in the test, which is then displayed in the test report
 * so the test report is more readable
 */
test('succesful login', async ({ login }) => {
    await test.step(`
    Step 1: User tries to log in with correct credentials
    Expected Result 1: Page should display "Logged In Successfully" message`, async () => {
        await login.loginWith('correctCredentials');
        await login.assertLoginWasSuccesful();
    })
});

test('failed login', async ({ login }) => {
    await test.step(`
    Step 1: User tries to log in with incorrect credentials
    Expected Result 1: Page should display error message`, async () => {
        await login.loginWith('incorrectCredentials');
        await login.asserLoingWasUnsuccesful();
    })
});