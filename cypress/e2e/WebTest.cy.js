/// <reference types="cypress" /> 

import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { PhonePage } from "../pages/PhonePage";
import { CartPage } from "../pages/cartPage";

let homePage = new HomePage()
let loginPage = new LoginPage()
let phonePage = new PhonePage()
let cartPage = new CartPage()

describe('Tasks02: Web Test', () => {
  it('Test01: Buy The Cheapest Phone', () => {
    //Step 1: Go to Home Page
    homePage.naviToHomepage();

    //Step 2: Login
    homePage.naviToLogin();
    loginPage.loginAction('automatedUser26@example.com', '4r4nd0mp4ssw0rd')

    //Step 3: Find The Cheapest Phone
    homePage.naviToPhons();
    phonePage.findTheCheapest();

    //Step 4: Add The Phone to Cart
    phonePage.addToCart();

    //Step 5: Verify The Adding
    homePage.naviToCart();
    cartPage.findTheItem('Sony xperia z5')

    //Step 6: Delete item from the cart
    cartPage.deleteItem('Sony xperia z5');
  })
})