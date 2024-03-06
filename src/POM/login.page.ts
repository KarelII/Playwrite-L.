import { Locator, Page } from "@playwright/test"

/**
 * .page.ts objects holds locators and methods crucial for page manupulation
 */
export class LoginPage {
    readonly usernameInput: Locator
    readonly passwordInput: Locator
    readonly submitButton: Locator
    readonly heading: Locator
    readonly logOutButton: Locator
    readonly title: Locator
    readonly error: Locator

    constructor(page: Page) {
        this.usernameInput = page.getByLabel('Username')
        this.passwordInput = page.getByLabel('Password')
        this.submitButton = page.getByRole('button', { name: 'Submit' })
        this.heading = page.getByRole('heading')
        this.logOutButton = page.getByRole('link', { name: 'Log out' })
        this.title = page.locator('h2')
        this.error = page.locator('#error')
    }
}