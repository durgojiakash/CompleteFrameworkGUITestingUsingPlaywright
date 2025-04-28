import {test as setup,expect} from '@playwright/test'
import { loginFunc } from '../../pages/Login/BusinessKeywords/loginFunc';

setup('@Login',async({page})=>{

    // await page.goto(String(process.env.STORE_URL));
    await page.goto("https://automationteststore.com/");

    await page.waitForLoadState('networkidle');

    //Verifying Title
    const title = "A place to practice your automation skills!"
    const StoreTitle = await page.title();
    expect(StoreTitle).toEqual(title)

    //Login
    const loginPage = new loginFunc(page);
    await loginPage.login("durgojiakash@gmail.com","Akash@123");

    
})