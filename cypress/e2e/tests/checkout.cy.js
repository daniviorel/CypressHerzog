let config = Cypress.config()
describe('Checkout.', function () {


  it('checkout', function () {
    cy.visit(`${config.baseUrl}/checkout/cart/`);
  })
});
