export class PhonePage {

    cardClass = '.card-block'
    cardPrise = 'h5'
    cardTitle = '.card-title'
    btn_addToCart = '.btn-success'

    findTheCheapest() {
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

    clickOnCard(cardName) {
        cy.contains(this.cardTitle, cardName).click();
    }

    addToCart(cardName) {
        this.clickOnCard(cardName)
        cy.get(this.btn_addToCart).should('be.visible').click()
    }
}