let config = Cypress.config()
describe('Header', function () {

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.top-link-product a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/wishlist/"]')
      .click();
  it("webpage redirect", () => {
    const page = {
        "from": "https://p-2023-herzog-elmiger.appengine.flow.ch/wishlist/",
        "to": "https://p-2023-herzog-elmiger.appengine.flow.ch/customer/account/login/referer/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
});