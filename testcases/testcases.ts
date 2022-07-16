import { loginpage } from "../pages/loginpage";

export class testcases {
    
    async loginToApplicationWithValidCredentials(email:string, password:string) {
        const oLoginPage = new loginpage;
        
        oLoginPage.acceptCookie();
        oLoginPage.enterEmail(email);
        oLoginPage.enterPassword(password);
        oLoginPage.clickOnLogin();
    } 
}