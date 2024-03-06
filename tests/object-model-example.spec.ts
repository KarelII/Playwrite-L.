import { test } from '../src/fixtures';

test('succesful login', async ({ login }) => {
    await login.succesfulLogin();
});

test('failed login', async ({ login }) => {
    await login.failedLogin();
});