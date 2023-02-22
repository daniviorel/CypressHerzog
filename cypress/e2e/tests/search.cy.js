let config = Cypress.config()
describe('Search', function () {


  it('search', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get("[name='q']").type("Kleben")
      .click()
  });
});