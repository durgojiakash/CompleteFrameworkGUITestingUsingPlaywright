import { test as base, expect } from '@playwright/test'
import { productsFunc } from '../pages/Products/BusinessKeywords/productFunc'
import { addProductFunc } from '../pages/AddProduct/BusinessKeywords/addProductFunc';

type MyFixtures = {
    productspage: productsFunc;
    addProductspage: addProductFunc;
  };

exports.expect = expect;
export const test = base.extend<MyFixtures>({

    productspage: async ({ page }, use) => {

        const productspage = new productsFunc(page);
        await use(productspage)
    },

    addProductspage: async ({ page }, use) => {

        const addProductspage = new addProductFunc(page);
        await use(addProductspage)
    },


})