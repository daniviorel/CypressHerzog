let config = Cypress.config()
describe('Header', function () {

  it('wishlist', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.top-link-product a[href="https://testshop.herzog-elmiger.ch/wishlist/"]')
      .click();
  it("webpage redirect", () => {
    const page = {
        "from": "https://testshop.herzog-elmiger.ch/wishlist/",
        "to": "https://testshop.herzog-elmiger.ch/customer/account/login/referer/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
});