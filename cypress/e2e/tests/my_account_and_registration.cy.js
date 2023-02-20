
let config = Cypress.config()
describe('Create new user', function () {

  beforeEach('before each test', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.authorization-link ').contains('Anmelden')
      .should('be.visible')
      .click();
    cy.get('.register-link span').contains('Registrierung für Neukunden.')
      .should('be.visible')
      .click();
    cy.get("[name='field[393]']").type("Vio");
    cy.get("[name='field[394]']").type("Herr");
    cy.get("[name='field[395]']").type("vio");
    cy.get("[name='field[396]']").type("vio");
    cy.get("[name='field[397]']").type("granvia, nr.1");
    cy.get("[name='field[398]']").type("granvia, nr.2");
    cy.get("[name='field[399]']").type("+34 661777888");
    cy.get("[name='field[400]']").type("vio@gmail.com");
    cy.get("[name='field[402][]']").click();
    cy.get("[name='field[403][]']").click();
    cy.get("button span").contains("Absenden")
      .should('be.visible')
      .click(); 
  });

  it('existing new user happyflow', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.authorization-link ').contains('Anmelden')
      .should('be.visible')
      .click();
    cy.get("[name='login[username]']").type("vio@gmail.com");
    cy.get("[name='login[password]']").type("vior1234");
    cy.get("button span").contains("Anmelden")
      .should('be.visible')
      .click(); 
  });
});  