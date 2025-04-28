import { expect, Page } from "@playwright/test";
import { baseLoc } from "../Locators/baseloc";

export class baseFunc {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async navigateBackToHomepage() {
        await this.page.waitForLoadState('networkidle')
        await baseLoc.navigateBackToHomepage(this.page).click();
        await expect(this.page.url()).toEqual("https://automationteststore.com/");

    }

}