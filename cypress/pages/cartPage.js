export class CartPage {

    itemInfo = '.success';
    itemTitle = 'td:nth-child(2)';
    itemPrice = 'td:nth-child(3)';
    itemDelete = 'td:nth-child(4) > a';

    findTheItem(itemName) {
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

    deleteItem(itemName) {
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

    emptyCart() {
        cy.get(this.itemInfo).each(($item) => {
            $item.find(this.itemDelete).click();
            cy.wait(1500);
        });
    }

}