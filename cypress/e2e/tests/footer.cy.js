let config = Cypress.config()
describe('Footer', function () {

  it('reclamation', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="reklamation"]').contains('Reklamationen')
      .should('be.visible')
      .click();
});
  it('certificate', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="https://www.herzog-elmiger.ch/ueberuns/ueber-uns/zertifizierungen/"]').contains('Zertifizierungen')
      .click();
  });
});