import {test as baseTest} from "@playwright/test";

interface TestDataLogin{
    username : string;
    password : string;
}

export const testLogin = baseTest.extend<{testDataLogin : TestDataLogin}>(
    {
        testDataLogin: {
            "username" : "rahulshettyacademy",
            "password" : "learning"
        }
    }
)