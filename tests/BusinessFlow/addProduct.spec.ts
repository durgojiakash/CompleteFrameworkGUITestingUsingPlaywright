import {test} from '../baseFile'

test("Products Category Validation", async ({ page, addProductspage }) => {

    //await page.goto(String(process.env.STORE_URL));
    await page.goto("https://automationteststore.com/");

    await page.waitForLoadState('networkidle');

    await addProductspage.verifyProductIsAddedToCart("Shirt");

})