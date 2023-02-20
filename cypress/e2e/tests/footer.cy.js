let config = Cypress.config()
describe('Footer', function () {

  it('footer', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.link-list a[href="https://www.herzog-elmiger.ch/ueberuns/ueber-uns/zertifizierungen/"]').contains('Zertifizierungen')
      .click();
  });
});