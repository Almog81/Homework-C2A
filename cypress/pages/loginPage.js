/// <reference types="cypress" /> 
export class LoginPage {

    txt_username = '#loginusername'
    txt_password = '#loginpassword'
    btn_submit = 'button[onclick="logIn()"]'

    loginAction(user, pass) {
        cy.wait(1500)
        cy.get(this.txt_username).type(user)
        cy.get(this.txt_password).type(pass)
        cy.get(this.btn_submit).click()
    }
}

