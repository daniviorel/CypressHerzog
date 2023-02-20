let config = Cypress.config()
describe('Header', function () {

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.top-link-product a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/wishlist/"]')
      .click();
  });
});