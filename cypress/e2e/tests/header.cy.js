let config = Cypress.config()
describe('Products', function () {

  it('product', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.top-link-product a[title="Meine Favoritenliste"]').contains('a.wishlist.icon.icon-favorites') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('customer/account/login/referer/aHR0cHM6Ly9wLTIwMjMtaGVyem9nLWVsbWlnZXIuYXBwZW5naW5lLmZsb3cuY2gvd2lzaGxpc3Qv/');
    });
  });
});