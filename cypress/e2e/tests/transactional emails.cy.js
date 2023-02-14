
let config = Cypress.config()
describe('Transactional emails', function () {

  it('company email', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.hot-support-container a[href="mailto:mail@herzog-elmiger.ch"]').contains('mail@herzog-elmiger.ch')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/bodenbelage.html');
    });
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