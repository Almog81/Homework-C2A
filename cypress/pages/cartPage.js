import { homePage } from '../support/commands';

export class CartPage {
    
    //Page Object
    itemInfo = '.success';
    itemTitle = 'td:nth-child(2)';
    itemPrice = 'td:nth-child(3)';
    itemDelete = 'td:nth-child(4) > a';

    //Page Actions

    /*
    Method Name: findTheItem
    Method Description: Finds and verifies the presence of a specific item in the cart.
    Method Parameters: itemName - The name of the item to be found.
    */
    findTheItem(itemName) {
        homePage.naviToCart();
        cy.get(this.itemInfo).each(($item) => {
            const title = $item.find(this.itemTitle).text();

            if (title === itemName) {
                cy.state('itemStatus', true);
            } else if (cy.state('itemStatus' === undefined)) {
                cy.state('itemStatus', false)
            }
        }).then(() => {
            assert.isTrue(cy.state('itemStatus'))
        });
    }

    /*
    Method Name: deleteItem
    Method Description: Locates and deletes a specific item from the cart.
    Method Parameters: itemName - The name of the item to be deleted.
    */
    deleteItem(itemName) {
        homePage.naviToCart();
        cy.get(this.itemInfo).each(($item) => {
            const title = $item.find(this.itemTitle).text();
            const delete_btn = $item.find(this.itemDelete)

            if (title === itemName) {
                cy.state('deleteBtn', delete_btn);
            }
        }).then(() => {
            cy.get(cy.state('deleteBtn')).click();
        });
    }

    /*
    Method Name: emptyCart
    Method Description: Empties the entire cart by deleting all items.
    */
    emptyCart() {
        homePage.naviToCart();
        cy.get(this.itemInfo).each(($item) => {
            $item.find(this.itemDelete).click();
            cy.wait(300);
        });
    }

}