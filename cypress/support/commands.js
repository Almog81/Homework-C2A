// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************

/*
Method Name: clearCache
Method Description: Clears both cookies and local storage in the Cypress browser.
*/
Cypress.Commands.add('clearCache', () => {
    cy.clearCookies();
    cy.clearLocalStorage();
});

//Pages Manager

import { HomePage } from "../pages/homePage";
import { LoginPage } from "../pages/loginPage";
import { PhonePage } from "../pages/PhonePage";
import { CartPage } from "../pages/cartPage";

export const homePage = new HomePage();
export const loginPage = new LoginPage();
export const phonePage = new PhonePage();
export const cartPage = new CartPage();