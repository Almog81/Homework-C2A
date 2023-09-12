import { homePage } from '../support/commands';

export class LoginPage {

    txt_username = '#loginusername'
    txt_password = '#loginpassword'
    btn_submit = 'button[onclick="logIn()"]'

    loginAction(user, pass) {
        homePage.naviToLogin();
        cy.get(this.txt_username).type(user)
        cy.get(this.txt_password).type(pass)
        cy.get(this.btn_submit).click()
    }
}