import { homePage, loginPage, phonePage, cartPage } from '../support/commands';

describe('Tasks02: Web Test', () => {
    it('Test01: Buy The Cheapest Phone', () => {
        //Step 1: Go to Home Page
        homePage.naviToHomepage();

        //Step 2: Login
        loginPage.loginAction('automatedUser26@example.com', '4r4nd0mp4ssw0rd')

        //Step 3: Find The Cheapest Phone and adding it to the cart
        phonePage.findTheCheapest();

        //Step 4: Empty The Cart
        cartPage.emptyCart();
    })
})