import {expect, Page} from '@playwright/test'
import { loginloc } from '../Locators/loginloc'

export class loginFunc {

    page:Page
    constructor(page:Page){
        this.page=page;
    }

    async login(username,password) {
        
        await loginloc.loginFromHomepage(this.page).click();
        await this.page.waitForLoadState('networkidle');
        await loginloc.loginName(this.page).fill(username);
        await loginloc.password(this.page).fill(password);
        await loginloc.loginButton(this.page).click();

        //Title Validation
        const homePageTitle = await this.page.title();
        await expect(homePageTitle).toEqual("Account Login") 

        await this.page.context().storageState({path:"loginCredentials.json"});

    }
}