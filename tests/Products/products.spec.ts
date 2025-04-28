import { expect, test } from "@playwright/test";
import { productsFunc } from "../../pages/Products/BusinessKeywords/productFunc";

test("Products Category Validation", async ({ page }) => {

    //await page.goto(String(process.env.STORE_URL));
    await page.goto("https://automationteststore.com/");
    await page.waitForLoadState('networkidle');

    const productspage = new productsFunc(page);
    //Product 1 - Apparel & accessories
    await productspage.validatingDifferentCategoryProductsPage("Apparel & accessories");

})