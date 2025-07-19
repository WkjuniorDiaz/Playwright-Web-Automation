import { POManager } from '../pageObject/POManager';
import { testLogin } from '../dataSet/test-base';

testLogin.only('@Login Successful login', async ({ page,testDataLogin }) => {
    const poManager = new POManager(page);
    const loginPage = poManager.getLoginPage();
    const dashboardPage = poManager.getDashboardPage();

    await loginPage.goto();
    await loginPage.validLogin(testDataLogin.username,testDataLogin.password);

    await dashboardPage.printProductNames();  
});
