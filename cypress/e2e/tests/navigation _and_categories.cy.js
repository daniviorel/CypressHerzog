let config = Cypress.config()
describe('Navigation and categories.', function () {

  it('check main navigation', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/bodenbelage.html"] span').contains('Boden')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/bodenbelage.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/brandschutzplatten.html"] span').contains('Brandschutz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/brandschutzplatten.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/dammstoffe.html"] span').contains('Dämmen')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/dammstoffe.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/holzwerkstoffe.html"] span').contains('Holzwerkstoffe')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/holzwerkstoffe.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/kanten.html"] span').contains('Kanten')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/kanten.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/kleben-dichten.html"] span').contains('Kleben')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/kleben-dichten.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/massivholzplatten-bauholz.html"] span').contains('Massivholzpl./ Bauholz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/massivholzplatten-bauholz.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/turen.html"] span').contains('Türen')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/turen.html');
    });

    cy.get('.nav-desktop a[href="https://herzog-elmiger.ch/furnier-schnittholz.html"] span').contains('Furnier/Schnittholz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/furnier-schnittholz.html');
    });
  });
});
