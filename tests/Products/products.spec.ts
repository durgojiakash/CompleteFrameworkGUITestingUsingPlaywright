import {test} from '../baseFile'

test("Products Category Validation", async ({ page, productspage }) => {

    //await page.goto(String(process.env.STORE_URL));
    await page.goto("https://automationteststore.com/");
    await page.waitForLoadState('networkidle');

    //Product 1 - Apparel & accessories
    await productspage.validatingDifferentCategoryProductsPage("Apparel & accessories");

})