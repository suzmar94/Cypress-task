describe('SwagLab', () => {

    it('SwagLab checkout', () => {

        cy.openHomePage();
        cy.get('.bot_column').should('be.visible');
        cy.get('[placeholder="Username"]').type('standard_user');
        cy.get('[placeholder="Password"]').type('secret_sauce');
        cy.get('#login-button').click();
        cy.get('.product_sort_container').select(2);
        cy.get('#add-to-cart-sauce-labs-onesie').click();
        cy.get('#add-to-cart-sauce-labs-fleece-jacket').click();
        cy.get('#shopping_cart_container').click();
        cy.get('#checkout').click();
        cy.get('[placeholder="First Name"]').type('Suzana');
        cy.get('[placeholder="Last Name"]').type('Markovic');
        cy.get('[placeholder="Zip/Postal Code"]').type('11030');
        cy.get('#continue').click();
        cy.get('#finish').click();
        cy.get('#back-to-products').click();
        cy.get('#react-burger-menu-btn').click();
        cy.get('#logout_sidebar_link').click();
        
    })


})