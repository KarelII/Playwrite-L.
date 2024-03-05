const base = require('@playwright/test');
const { ObjectRepository } = require('./objectRepository');
const { Utils } = require('./utils');

// Extend base test
// This new "test" can be used in multiple test files, and each of them will get the fixtures.
exports.test = base.test.extend({
    objectRepository: async ({ page }, use) => {
        // Set up the fixture.
        const objectRepository = new ObjectRepository(page);

        // Use the fixture value in the test.
        await use(objectRepository);
    },

    utils: async ({ page }, use) => {
        await use(new Utils(page));
    },
});
exports.expect = base.expect;