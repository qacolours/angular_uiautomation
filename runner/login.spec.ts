import { browser } from "protractor"
import { testcases } from "../testcases/testcases";
import * as TestData from "../testdata/testdata.json"

const oTC = new testcases(); 

describe("feature: Login", () => {

    beforeAll(async () => {
        await browser.waitForAngularEnabled(false);
        await browser.manage().window().maximize();
        await browser.manage().timeouts().implicitlyWait(5000);
        await browser.get('https://www.phptravels.net/login');
    })

    it("TC001: To verify if user can login successfully on providing proper input", async () => {
        await oTC.loginToApplicationWithValidCredentials(TestData.testData.tc001.email,TestData.testData.tc001.password);
    })
})