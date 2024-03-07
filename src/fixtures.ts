import { test as base } from '@playwright/test';
import { ObjectRepository, ObjectRepositoryStructure } from './objectRepository';
import { Utils } from './utils';
import { LoginSteps } from './POM/login.steps';

// Declare the types of your fixtures.
type MyFixtures = {
    app: ObjectRepositoryStructure;
    utils: Utils;
    login: LoginSteps
};

// Extend base test 
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
export const test = base.extend<MyFixtures>({
    app: async ({ page }, use) => {
        // Set up the fixture.
        const objectRepository = new ObjectRepository(page);
        const app = await objectRepository.getObjects()
        await use(app);
    },

    utils: async ({ page }, use) => {
        await use(new Utils(page));
    },

    login: async ({ page }, use) => {
        await use(new LoginSteps(page));
    }
});
export { expect } from '@playwright/test';