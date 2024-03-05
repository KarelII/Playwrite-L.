export class ObjectRepository {
    constructor(page) {
        this.homePage = {
            emailInput: page.locator('input[name="email"]'),
            spreadsheetsButton: page.locator('button[type="submit"]'),
        }
        this.menuBar = {
            homeButton: page.locator('[alt="Stronglifts"]'),
            programs: {
                click: () => { page.locator('#primary-menu a[href="/program/"]').click() },
                stronglifts5x5: page.locator('#primary-menu a[href="https://stronglifts.com/stronglifts-5x5/"]'),
                stronglifts5x5plus: page.locator('a[href="https://stronglifts.com/stronglifts-5x5/plus/"]'),
            }
        }

    }
}