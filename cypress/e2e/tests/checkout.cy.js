let config = Cypress.config()
describe('Checkout', function () {


  it('checkout', function () {
    cy.visit(`${config.baseUrl}/checkout/cart/`);
    cy.get('.minicart-wrapper a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/checkout/cart/"]')
      .click();
  });
});
