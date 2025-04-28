import { Page } from "@playwright/test";

export const baseLoc = {

    //Nav Section
    navigateBackToHomepage : (page:Page) => {
        return page.locator("//img[@title='Automation Test Store']")
    },

}