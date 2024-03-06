import { Page } from "@playwright/test";

export class Utils {
    private page: Page;
    constructor(page: Page) {
        this.page = page;
    }

    async goToHomepage() {
        await this.page.goto('https://stronglifts.com/');
    }
}

