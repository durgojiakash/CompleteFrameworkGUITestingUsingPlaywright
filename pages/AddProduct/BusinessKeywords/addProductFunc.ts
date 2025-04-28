import { expect, Page } from "@playwright/test";
import { productsFunc } from "../../Products/BusinessKeywords/productFunc";
import { addProductLoc } from "../Locators/addProductLoc";
import { baseFunc } from "../../Base/BusinessKeywords/baseFunc";

export class addProductFunc {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async verifyProductIsAddedToCart(productName) {
        const search = new productsFunc(this.page);
        await search.searchAProduct(productName);
        await this.addProductToCartAndVerifyInCart(productName)
    }

    async addProductToCartAndVerifyInCart(productName) {

        let countofProduct = await addProductLoc.productName(this.page).count();

        let product;
        for (let i = 0; i < countofProduct; i++) {

            if (await addProductLoc.addToCartOption(this.page).nth(i).isVisible()) {
                product = await addProductLoc.productName(this.page).nth(i).textContent();
                await addProductLoc.addToCartOption(this.page).nth(i).click();
                await addProductLoc.addToCart(this.page).click();
                await this.page.waitForLoadState('networkidle')
                break;
            }
        }

        const base = new baseFunc(this.page);
        await base.navigateBackToHomepage();

        await addProductLoc.homeOptionNav(this.page).hover();
        await addProductLoc.cartOption(this.page).click();
        expect(this.page.url()).toEqual("https://automationteststore.com/index.php?rt=checkout/cart")

        const ItemsInCart = await addProductLoc.itemsInCart(this.page).count();

        for (let i = 0; i < ItemsInCart; i++) {

            if ((await addProductLoc.productDetails(this.page, productName).nth(i).textContent())?.includes(productName)) {

                break;
            }
            expect(product).toContain(productName)
            console.log(productName + " Item is present in Cart");
        }

    }

}