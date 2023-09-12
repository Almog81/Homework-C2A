import { homePage, cartPage } from '../support/commands';

export class PhonePage {

    //Page Object
    cardClass = '.card-block'
    cardPrise = 'h5'
    cardTitle = '.card-title'
    btn_addToCart = '.btn-success'

    //Page Actions

    /*
    Method Name: findTheCheapest
    Method Description: Finds the cheapest phone and adds it to the cart.
    */
    findTheCheapest() {
        homePage.naviToPhons();
        cy.get(this.cardClass).each(($card) => {
            const price = parseFloat($card.find(this.cardPrise).text().replace('$', ''));
            const title = $card.find(this.cardTitle).text();

            if (cy.state('cheapestPrice') === undefined || price < cy.state('cheapestPrice')) {
                cy.state('cheapestPrice', price);
                cy.state('cheapestTitle', title);
            }
        }).then(() => {
            this.addToCart(cy.state('cheapestTitle'))
        });
    }

    /*
    Method Name: addToCart
    Method Description: Adds a specific phone to the cart.
    Method Parameters: cardName - The name of the phone to be added.
    */
    addToCart(cardName) {
        this.clickOnCard(cardName)
        cy.get(this.btn_addToCart).should('be.visible').click()
        this.verifayAddingToCart(cardName);
        homePage.naviToHomepage();
    }

    /*
    Method Name: clickOnCard
    Method Description: Clicks on a specific phone card.
    Method Parameters: cardName - The name of the phone card to be clicked.
    */
    clickOnCard(cardName) {
        cy.contains(this.cardTitle, cardName).click();
    }

    /*
    Method Name: verifayAddingToCart
    Method Description: Verifies if a specific phone was successfully added to the cart.
    Method Parameters: cardName - The name of the phone to be verified in the cart.
    */
    verifayAddingToCart(cardName) {
        cartPage.findTheItem(cardName);
    }

}