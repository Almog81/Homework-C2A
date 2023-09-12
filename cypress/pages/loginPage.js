import { homePage } from '../support/commands';

export class LoginPage {
    
    //Page Object
    txt_username = '#loginusername'
    txt_password = '#loginpassword'
    btn_submit = 'button[onclick="logIn()"]'

    /*
    Method Name: loginAction
    Method Description: Performs the login action by entering the provided username and password, and submitting the form.
    Method Parameters: 
        - user: The username to be entered.
        - pass: The password to be entered.
    */
    loginAction(user, pass) {
        homePage.naviToLogin();
        cy.get(this.txt_username).type(user)
        cy.get(this.txt_password).type(pass)
        cy.get(this.btn_submit).click()
    }
}