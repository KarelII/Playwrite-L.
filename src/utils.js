export class Utils {
    constructor(page) {
        this.page = page;

    }

    async goToHomepage() {
        await this.page.goto('https://stronglifts.com/');
    }
}

