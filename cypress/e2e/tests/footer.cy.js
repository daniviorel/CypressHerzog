let config = Cypress.config()
describe('Footer', function () {

  it('reclamation', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="https:/p-2023-herzog-elmiger.appengine.flow.ch/ueberuns/ueber-uns/team/"]').contains('Reklamationen')
      .should('be.visible')
      .click();  
  it("webpage redirect", () => {
    const page = {
        "from": "https://p-2023-herzog-elmiger.appengine.flow.ch/",
        "to": "https:/p-2023-herzog-elmiger.appengine.flow.ch/ueberuns/ueber-uns/team/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
  
  it('certificate', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/ueberuns/ueber-uns/zertifizierungen/"]').contains('Zertifizierungen')
      .click();
  it("webpage redirect", () => {
    const page = {
        "from": "https://p-2023-herzog-elmiger.appengine.flow.ch/",
        "to": "https://p-2023-herzog-elmiger.appengine.flow.ch/ueberuns/ueber-uns/zertifizierungen/"
    }

    cy.visit(page.from, { failOnStatusCode: false });

    cy.url()
        .should("be.equals", page.to)
    });
  });
});