import { expect, type Locator, type Page } from '@playwright/test';

export class DashboardPage{

    page : Page;
    productName : Locator;

    constructor(page : Page){
        this.page = page;
        this.productName = page.locator(".card-title");

    }

    async printProductNames(){
        await this.productName.last().waitFor();
        const allTitles = await this.productName.allTextContents();
        console.log(allTitles);
    }
}