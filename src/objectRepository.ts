import { Locator, Page } from "@playwright/test"

export class ObjectRepository {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async getObjects(): Promise<ObjectRepositoryStructure> {
        return {
            stronglifts: {
                homePage: {
                    emailInput: this.page.locator('input[name="email"]'),
                    spreadsheetsButton: this.page.locator('button[type="submit"]'),
                },
                menuBar: {
                    homeButton: this.page.locator('[alt="Stronglifts"]'),
                    programs: {
                        click: async () => { await this.page.locator('#primary-menu a[href="/program/"]').click() },
                        stronglifts5x5: this.page.locator('#primary-menu a[href="https://stronglifts.com/stronglifts-5x5/"]'),
                        stronglifts5x5plus: this.page.locator('a[href="https://stronglifts.com/stronglifts-5x5/plus/"]'),
                    }
                }
            },
            login: {
                usernameInput: this.page.getByLabel('Username'),
                passwordInput: this.page.getByLabel('Password'),
                submitButton: this.page.getByRole('button', { name: 'Submit' }),
                heading: this.page.getByRole('heading'),
                logOutButton: this.page.getByRole('link', { name: 'Log out' }),
                title: this.page.locator('h2'),
                error: this.page.locator('#error'),
            }
        }
    }
}

export type ObjectRepositoryStructure = {
    stronglifts: {
        homePage: {
            emailInput: Locator;
            spreadsheetsButton: Locator;
        },
        menuBar: {
            homeButton: Locator;
            programs: {
                click: () => Promise<void>;
                stronglifts5x5: Locator;
                stronglifts5x5plus: Locator;
            }
        }
    }
    login: {
        usernameInput: Locator;
        passwordInput: Locator;
        submitButton: Locator;
        heading: Locator;
        logOutButton: Locator;
        title: Locator;
        error: Locator;
    }
}
