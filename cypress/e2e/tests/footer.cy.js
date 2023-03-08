let config = Cypress.config()
describe('Footer', function () {

  it('reclamation', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="reklamation"]').contains('Reklamationen')
      .should('be.visible')
      .click();  
  it("webpage redirect", () => {
    const page = {
        "from": "https://test-spa-aarau-upgrade.herzog-elmiger.ch/",
        "to": "https://test-spa-aarau-upgrade.herzog-elmiger.ch/customer/account/login/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
  
  it('certificate', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="https://www.herzog-elmiger.ch/ueberuns/ueber-uns/zertifizierungen/"]').contains('Zertifizierungen')
      .click();
  it("webpage redirect", () => {
    const page = {
        "from": "https://test-spa-aarau-upgrade.herzog-elmiger.ch/",
        "to": "https://www.herzog-elmiger.ch/ueberuns/ueber-uns/zertifizierungen/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
});