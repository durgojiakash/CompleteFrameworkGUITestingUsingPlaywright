import { expect, test } from "@playwright/test";
import { addProductFunc } from "../../pages/AddProduct/BusinessKeywords/addProductFunc";

test("Products Category Validation", async ({ page }) => {

    // await page.goto(String(process.env.STORE_URL));
    await page.goto("https://automationteststore.com/");

    await page.waitForLoadState('networkidle');

    const addProd = new addProductFunc(page);
    await addProd.verifyProductIsAddedToCart("Shirt");

})