import { by, element, utils } from "protractor";
import { utilfunction } from "../utility_functions/utility";

export class loginpage extends utilfunction {
    
    private email_txtbox = element(by.name('email'));
    private password_txtbox = element(by.name('password'));
    private rememberme_chkbox = element(by.xpath("//input[@id='rememberchb']/following-sibling::label[1]"));
    private resetpassword_lnk = element(by.xpath("//label[text()='Reset Password']"));
    private login_btn = element(by.buttonText("Login"));
    private signup_btn = element(by.xpath("//input[@id='rememberchb']/following-sibling::label[1]"));
    private cookie_btn = element(by.id("cookie_stop"));
    
    async enterEmail(email: string) {
        await super.sendKeys(this.email_txtbox,email);
    }

    async enterPassword(password: string) {
        await super.sendKeys(this.password_txtbox,password);
    }

    async rememberUser() {
        await super.selectCheckbox(this.rememberme_chkbox);
    }

    async resetPassword() {
        await super.click(this.resetpassword_lnk);
    }

    async clickOnLogin() {
        await super.click(this.login_btn);
    }
    
    async clickOnSignup() {
        await super.click(this.signup_btn);
    }

    async acceptCookie() {
        await super.click(this.cookie_btn);
    }
}