import { Page, expect } from "@playwright/test"
import { LoginPage } from "./login.page";

/**
 * .steps.ts files holds bussines logic for tests
 */
export class LoginSteps {
    private loginPage: LoginPage;
    private page: Page;
    private baseUrl: string;

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseUrl = 'https://practicetestautomation.com/practice-test-login/'
    }

    /**
    * Fills in correct username and password and clicks the submit button
    */
    async succesfulLogin() {
        await this.page.goto(this.baseUrl)
        await this.loginPage.usernameInput.fill('student')
        await this.loginPage.passwordInput.fill('Password123')
        await this.loginPage.submitButton.click()
        await expect(this.loginPage.heading).toContainText('Logged In Successfully');
        await this.loginPage.logOutButton.click()
        await expect(this.loginPage.title).toContainText('Test login');
    }

    /**
     * Fills in incorrect username and password and clicks the submit button
     */
    async failedLogin() {
        await this.page.goto(this.baseUrl)
        await this.loginPage.usernameInput.fill('student')
        await this.loginPage.passwordInput.fill('student')
        await this.loginPage.submitButton.click()
        await expect(this.loginPage.error).toContainText('Your password is invalid!');
    }
}   