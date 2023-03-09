let config = Cypress.config()
describe('Checkout', function () {

  it('select product', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.nav-desktop a[href="https://https://test-spa-aarau-upgrade.herzog-elmiger.ch/bodenbelage.html"] span').contains('Boden')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/bodenbelage.html');
    });

    cy.get('.hover-box a[href="https://https://test-spa-aarau-upgrade.herzog-elmiger.ch/tilo-vinyl-boden-elito-trend-eiche-natur.html"]').contains('tilo Vinyl-Boden Elito Trend Eiche natur gebürstet')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/tilo-vinyl-boden-elito-trend-eiche-natur.html');
    });

    cy.get("[name='super_group[9184]']").type("1")
      .should('have.length', 1)
      .click();

    cy.get('button span').contains('Zum Warenkorb hinzufügen')
      .should('be.visible') 
      .click()
      .wait(3000);
  });

  it('checkout', function () {
    cy.visit(`${config.baseUrl}/checkout/cart/`);
    cy.get('.minicart-wrapper a[href="https:/https://test-spa-aarau-upgrade.herzog-elmiger.ch/checkout/cart/"]')
      .click();
  });
});
