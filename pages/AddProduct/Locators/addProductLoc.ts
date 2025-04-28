import {Page} from '@playwright/test'

export const addProductLoc = {

    homeOptionNav : (page: Page)=>{
        return page.locator("//a[@class='active menu_home']")
    },

    cartOption : (page: Page)=>{
        return page.locator("//ul[@id='main_menu']/li/a[contains(@href,'cart')]")
    },

    addToCartOption : (page: Page)=>{
        return page.locator("//div[@class='thumbnail']/descendant::a[@title='Add to Cart']")
    },

    addToCart : (page: Page)=>{
        return page.locator("//a[normalize-space()='Add to Cart']")
    },

    itemsInCart : (page: Page)=>{
        return page.locator("//td[@class='align_left']//a")
    }, 

    productName : (page: Page)=>{
        return page.locator("//a[@class='prdocutname']")
    },  

    productNameAddToCartPage : (page: Page)=>{
        return page.locator("//div[@class='thumbnail']/a")
    },                 

    productDetails : (page: Page,productName)=>{
        return page.locator(`//a[contains(text(),${productName})]`)
    },
} 