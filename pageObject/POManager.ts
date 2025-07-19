import { expect, type Locator, type Page } from '@playwright/test';
import { LoginPage } from './LoginPage';
import { DashboardPage } from './DashboardPage';

export class POManager{

    page : Page;
    loginPage : LoginPage;
    dashboardPage : DashboardPage;

    constructor(page : Page){
        this.page = page;
        this.loginPage = new LoginPage(this.page);
        this.dashboardPage = new DashboardPage(this.page);
    }

    getLoginPage() : LoginPage{
        return this.loginPage;
    }

    getDashboardPage() : DashboardPage{
        return this.dashboardPage;
    }

}