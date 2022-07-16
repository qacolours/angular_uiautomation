import { browser, ElementFinder, protractor, ProtractorExpectedConditions } from "protractor";

export class utilfunction {

    private ec: ProtractorExpectedConditions = browser.ExpectedConditions;
    private timeout = 3000;

    /**
     * @description This method is used to click on the element
     * @param element Pass the element locator
     */
    public async click(element: ElementFinder){
        await browser.wait(this.ec.elementToBeClickable(element),this.timeout,"Element is not clickable");
        await element.click();
    }

    public async selectCheckbox(element: ElementFinder){
        await browser.wait(this.ec.elementToBeClickable(element),this.timeout,"Element is not clickable");
        await element.click();
        let state:Boolean = await element.isSelected();

        if (state != true) {
            throw console.error("The checkbox is not checked properly");
        }
    }

    public async visibilityOf(element: ElementFinder) {
        await browser.wait(this.ec.visibilityOf(element),this.timeout,"Element is not visible at this point");
    }

    /**
     * @description This method is used to pass value to a textfield
     * @param element Pass the element locator
     * @param testData Data to be typed on the element
     */
    public async sendKeys(element: ElementFinder, testData: string){
        await this.visibilityOf(element);
        await element.sendKeys(testData);
    }
    
    /**
     * @description This method is used to clear and pass value to a textfield
     * @param element Pass the element locator
     * @param testData Data to be typed on the element
     */
    public async clearAndSendKeys(element: ElementFinder, testData: string){
        await this.visibilityOf(element);
        await element.clear();
        await element.sendKeys(testData);
    }

    /**
     * @description This method is used to clear the value of a textfield
     * @param element Pass the element locator
     */
    public async clear(element: ElementFinder){
        await this.visibilityOf(element);
        await element.clear();
    }

    public async assertText(element: ElementFinder, textToValidate: string) {
        await this.visibilityOf(element);
        let actualText = await element.getText();
        expect(actualText.trim()).toBe(textToValidate);
    }

    public async waitForAlert() {
        await browser.wait(this.ec.alertIsPresent(),this.timeout,"Alert is not present presently");
    }

    public async acceptAlert() {
        this.waitForAlert();
        await (await browser.switchTo().alert()).accept();
    }
    
    public async dismissAlert() {
        this.waitForAlert();
        await (await browser.switchTo().alert()).dismiss();
    }

    public async getTextFromAlert(): Promise<string> {
        this.waitForAlert();
        let sText = await (await browser.switchTo().alert()).getText();

        return sText;
    }

    public async sendTextInAlert(sTextToBePassed: string) {
        this.waitForAlert();
        await (await browser.switchTo().alert()).sendKeys(sTextToBePassed);
    }

    public async switchToFrame(frameNumber: number) {
        await browser.switchTo().frame(frameNumber);
    }


    public async sendKeysWithTab(element: ElementFinder, testData: string){
        await this.visibilityOf(element);
        await element.sendKeys(testData, protractor.Key.TAB);
    }

    public async sendKeysWithEnter(element: ElementFinder, testData: string){

        let capabilities = await browser.getCapabilities();
        let platform = capabilities.get('platform');

        await this.visibilityOf(element);
        
        if (platform === 'Mac OS X') {
            await element.sendKeys(testData, protractor.Key.RETURN);
        } else {
            await element.sendKeys(testData, protractor.Key.ENTER);
        }
    }

    public async mouseHoverAndClick(element: ElementFinder) {
        this.visibilityOf(element);
        await browser.actions().mouseMove(await element.getWebElement()).click().perform();
    }

    public async moveToElement(element: ElementFinder) {
        this.visibilityOf(element);
        await browser.actions().mouseMove(await element.getWebElement()).perform();
    }
}