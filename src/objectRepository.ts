import { Locator, Page } from "@playwright/test"

/**
 * ObjectRepository class holds all the locators for the application
 */
export class ObjectRepository {
    private page: Page
    constructor(page: Page) {
        this.page = page
    }

    async getObjects(): Promise<ObjectRepositoryStructure> {
        return {
            login: {
                usernameInput: this.page.getByLabel('Username'),
                passwordInput: this.page.getByLabel('Password'),
                submitButton: this.page.getByRole('button', { name: 'Submit' }),
                title: this.page.locator('h2'),
                error: this.page.locator('#error'),
            },
            dashboard: {
                heading: this.page.getByRole('heading'),
                logOutButton: this.page.getByRole('link', { name: 'Log out' }),
            }
        }
    }
}

export type ObjectRepositoryStructure = {
    login: {
        usernameInput: Locator,
        passwordInput: Locator,
        submitButton: Locator,
        title: Locator,
        error: Locator
    },
    dashboard: {
        heading: Locator,
        logOutButton: Locator,
    }
}
