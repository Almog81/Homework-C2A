export class HomePage {
    
    //Page Object
    btn_login = '#login2'
    btn_phone = 'a[onclick="byCat(\'phone\')"]'
    btn_laptop = 'a[onclick="byCat(\'notebook\')"]'
    btn_monitors = 'a[onclick="byCat(\'monitor\')"]'
    btn_cart = '#cartur'

    //Page Actions

    /*
    Method Name: naviToHomepage
    Method Description: Navigates to the homepage of the demo website.
    */
    naviToHomepage() {
        cy.visit('https://www.demoblaze.com/')
    }

    /*
    Method Name: naviToLogin
    Method Description: Navigates to the login page and waits for the page to load.
    */
    naviToLogin() {
        cy.get(this.btn_login).click()
        cy.wait(500)
    }

    /*
    Method Name: naviToPhons
    Method Description: Navigates to the phones category page.
    */
    naviToPhons() {
        cy.get(this.btn_phone).click()
    }

    /*
    Method Name: naviToCart
    Method Description: Navigates to the shopping cart page and waits for a short duration.
    */
    naviToCart() {
        cy.get(this.btn_cart).click()
        cy.wait(2500)
    }
}