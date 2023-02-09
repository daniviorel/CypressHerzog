let config = Cypress.config()
describe('Checkout', function () {


  it('checkout', function () {
    cy.visit(`${config.baseUrl}/checkout/cart/`);
    cy.get('.minicart-wrapper a[href="https://herzog-elmiger.ch/checkout/cart/"]')
      .click();
  });
});
