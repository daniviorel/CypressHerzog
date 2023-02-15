let config = Cypress.config()
describe('Navigation and categories', function () {

  it('check main navigation', function () {
    cy.visit(`${config.baseUrl}`);
    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/bodenbelage.html"] span').contains('Boden')
      .should('be.visible') 
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/bodenbelage.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/brandschutzplatten.html"] span').contains('Brandschutz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/brandschutzplatten.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/dammstoffe.html"] span').contains('Dämmen')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/dammstoffe.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/holzwerkstoffe.html"] span').contains('Holzwerkstoffe')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/holzwerkstoffe.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/kanten.html"] span').contains('Kanten')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/kanten.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/kleben-dichten.html"] span').contains('Kleben')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/kleben-dichten.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/massivholzplatten-bauholz.html"] span').contains('Massivholzpl./ Bauholz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/massivholzplatten-bauholz.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/turen.html"] span').contains('Türen')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/turen.html');
    });

    cy.get('.nav-desktop a[href="https://p-2023-herzog-elmiger.appengine.flow.ch/furnier-schnittholz.html"] span').contains('Furnier/Schnittholz')
      .should('be.visible')
      .click();
    cy.location().should(loc => {
        expect(loc.pathname).to.equal('/furnier-schnittholz.html');
    });
  });
});
