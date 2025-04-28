import { expect, Page } from "@playwright/test";
import { productsLoc } from "../Locators/productsLoc";
import normalizeText from "../../../utility/commons";


export class productsFunc {

    page: Page;

    constructor(page: Page) {
        this.page = page;
    }

    async searchAProduct(productName: string){

        await productsLoc.searchField(this.page).click();
        await productsLoc.searchField(this.page).fill(productName);
        await productsLoc.searchIcon(this.page).click()
        await this.page.waitForLoadState('networkidle')
    }

    async choosingAProductCategory(prodCategory: any) {
        await productsLoc.prodCategory(this.page, prodCategory).click();
        await this.page.waitForLoadState('networkidle');
        expect(await this.page.title()).toBe(prodCategory);
        const breadcrumbContent = await productsLoc.breadcrumbContent(this.page,prodCategory).textContent();
        const contentModified = await normalizeText(breadcrumbContent)
        expect(contentModified).toEqual(prodCategory);
    }

    async validatingProductCategoryItems(productCategory: any) {
        await productsLoc.prodCategory(this.page, productCategory).hover();
        await this.page.waitForTimeout(700);
        const navItemCount = await productsLoc.prodCategoryItemsNav(this.page).count();
        const tItemCount = await productsLoc.prodCategoryItemsTRow(this.page).count();
        expect(navItemCount).toEqual(tItemCount)
    }

    async validatingProductItems(){
        // await this.page.evaluate(() => {
        //     window.scrollTo(0, document.body.scrollHeight);
        //   });
        // await this.page.waitForTimeout(700);
        // const flag = await productsLoc.prodItemsCountText(this.page).isVisible()
        // console.log(flag)
        // await productsLoc.prodItemsCountText(this.page).waitFor({ state: 'visible' });
        // let countText = await productsLoc.prodItemsCountText(this.page).innerText();
        // console.log(countText)
        // let parts = countText?.split(' ').pop();
        // console.log(typeof(parts))
        const count = await productsLoc.prodItemsCount(this.page).count();
        console.log("No of items in Page1 :" + count)

    }

    async validatingDifferentCategoryProductsPage(prodCategory: any) {

        await this.choosingAProductCategory(prodCategory);
        await this.validatingProductCategoryItems(prodCategory);
        await this.validatingProductItems();

    }


}