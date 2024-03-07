import { Page } from "@playwright/test";

/**
 * Utils class holds helper methods that can be used in multiple tests
 */
export class Utils {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goToHomepage() {
        await this.page.goto('https://stronglifts.com/');
    }
}

