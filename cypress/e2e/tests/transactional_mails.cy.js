
let config = Cypress.config()
describe('Transactional mails', function () {

  it('company email', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.hotline a[href="tel:0041413175050"]').contains('041 317 50 50')
      .should('be.visible') 
      .click();
    cy.get('.hot-support-container a[href="mailto:mail@herzog-elmiger.ch"]').contains('mail@herzog-elmiger.ch')
      .should('be.visible') 
      .click();
  });

  it.skip('can log in with confirmed account', () => {
    cy.visit(`${config.baseUrl}`);
    cy.contains('Sign in to your account');
    // fill out username (email) and password
    cy.get('[data-test="username-input"]').type(emailAddress);
    cy.get('[data-test="sign-in-password-input"]').type(password);
    // submit
    cy.get('[data-test="sign-in-sign-in-button"]').click();
  });
});