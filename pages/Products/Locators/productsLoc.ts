import { Page } from "@playwright/test";

export const productsLoc = {

    //Nav Section
    prodCategory: (page: Page, productCategory) => {
        return page.locator(`//ul[@class='nav-pills categorymenu']/descendant::a[contains(text(),"${productCategory}")]`)
    },

    searchField: (page: Page) => {
        return page.locator("//input[@id='filter_keyword']")
    },
    
    searchIcon: (page: Page) => {
        return page.locator("//div[@title='Go']")
    },

    prodCategoryItemsNav: (page: Page) => {
        return page.locator("//ul[@class='nav-pills categorymenu']/descendant::li[@class='current']/descendant::ul/li/a")
    },

    //Breadcrumb Section
    breadcrumbContent: (page: Page, prodCategory) => {
        return page.locator(`//ul[@class='breadcrumb']//a[contains(normalize-space(), '${prodCategory}')]`)
    },

    //Thumbnail Section
    prodCategoryItemsTRow: (page: Page) => {
        return page.locator("//ul[@class='thumbnails row']//li")
    },



    //Item Count Section
    prodItemsCountText: (page: Page) => {
        return page.locator("(//form[@class='form-inline pull-left'])[2]")
    },

    prodItemsCount: (page: Page) => {
        return page.locator("//div[@class='thumbnails grid row list-inline']/descendant::div[@class='thumbnail']")
    },

    prodTotalItemsCount: (page: Page) => {
        return page.locator("//select[@id='limit']/option[text()='20']")
    },








}