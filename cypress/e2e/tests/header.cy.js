let config = Cypress.config()
describe('Header', function () {

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.top-link-product a[href="https://test-spa-aarau-upgrade.herzog-elmiger.ch//wishlist/"]')
      .click();
  });
});