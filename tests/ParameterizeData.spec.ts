import { test, expect } from '@playwright/test';
import { POManager } from '../pageObject/POManager';

const dataSet = JSON.parse(JSON.stringify(require('../dataSet/loginTestData.json')))

for(const data of dataSet){
test(`Login ${data.username}`, async ({ page }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await loginPage.goto();
    await loginPage.validLogin(data.username,data.password);

    await dashboardPage.printProductNames();  
});
}