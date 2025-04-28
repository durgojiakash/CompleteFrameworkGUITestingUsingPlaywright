import {Page} from '@playwright/test'

export const loginloc = {

    loginFromHomepage : (page:Page)=>{
        return page.locator("//ul[@id='customer_menu_top']//li")
    },

    loginName : (page:Page)=>{
        return page.locator("//input[@id='loginFrm_loginname']")
    },

    password : (page:Page)=>{
        return page.locator("//input[@id='loginFrm_password']")
    },

    loginButton : (page:Page)=>{
        return page.locator("//button[normalize-space()='Login']")
    },

    





}