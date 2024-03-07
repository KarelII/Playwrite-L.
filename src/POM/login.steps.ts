import { Page, expect } from "@playwright/test"
import { LoginPage } from "./login.page";

/**
 * .steps.ts files holds bussines logic for tests
 */
export class LoginSteps {
    private loginPage: LoginPage;
    private page: Page;
    private baseUrl: string;
    private userCredentials = {
        correctCredentials: {
            username: 'student',
            password: 'Password123'
        },
        incorrectCredentials: {
            username: 'student',
            password: 'student'
        }
    }

    constructor(page: Page) {
        this.page = page;
        this.loginPage = new LoginPage(page);
        this.baseUrl = 'https://practicetestautomation.com/practice-test-login/'
    }

    /**
    * Fills in selected credentials and logs in
    */
    async loginWith<T extends keyof typeof this.userCredentials>(credentialsType: T) {
        const credentials = this.userCredentials[credentialsType];
        await this.page.goto(this.baseUrl)
        await this.loginPage.usernameInput.fill(credentials.username)
        await this.loginPage.passwordInput.fill(credentials.password)
        await this.loginPage.submitButton.click()
    }

    /**
     * Asserts that successful login message is displayed
     */
    async assertLoginWasSuccesful() {
        await expect(this.loginPage.heading).toContainText('Logged In Successfully');
    }

    /**
     * Asserts that unsuccessful login message is displayed
     */
    async asserLoingWasUnsuccesful() {
        await expect(this.loginPage.error).toContainText('Your password is invalid!');
    }
}   