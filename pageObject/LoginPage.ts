import { expect, type Locator, type Page } from '@playwright/test';


export class LoginPage{

    page : Page;
    usernameLocator : Locator;
    passwordLocator : Locator;
    signInBtn : Locator;

    constructor(page : Page){
        this.page = page;
        this.usernameLocator = page.locator("#username");
        this.passwordLocator = page.locator("#password");
        this.signInBtn = page.locator("#signInBtn");

    }

    async goto(){
        await this.page.goto("https://rahulshettyacademy.com/loginpagePractise/");
    }

    async validLogin(username : string, password : string){
        await this.usernameLocator.fill(username);
        await this.passwordLocator.fill(password);
        await this.signInBtn.click();    
    }

}