export class HomePage {
    btn_login = '#login2'
    btn_phone = 'a[onclick="byCat(\'phone\')"]'
    btn_laptop = 'a[onclick="byCat(\'notebook\')"]'
    btn_monitors = 'a[onclick="byCat(\'monitor\')"]'
    btn_cart = '#cartur'

    naviToHomepage() {
        cy.visit('https://www.demoblaze.com/')
    }
    naviToLogin() {
        cy.get(this.btn_login).click()
        cy.intercept('GET', 'https://hls.demoblaze.com/about_demo_hls_600k00000.ts').as('pageLoaded')
        cy.wait('@pageLoaded')
    }

    naviToPhons() {
        cy.get(this.btn_phone).click()
    }

    naviToCart() {
        cy.get(this.btn_cart).click()
        cy.wait(2500)
    }
}