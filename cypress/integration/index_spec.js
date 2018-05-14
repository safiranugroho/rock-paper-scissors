const homepage = 'http://localhost:8080'

describe('Rock Paper Scissors', () => {
  context('Random play', () => {
    it('should display nothing as first player\'s default hand', () => {
      cy.visit(homepage);
      cy.get('#first-player-hand')
        .should('be.empty');
    });

    it('should display nothing as second player\'s default hand', () => {
      cy.visit(homepage);
      cy.get('#second-player-hand')
        .should('be.empty');
    });

    it('should update player hands and winner after play button is clicked', () => {
      cy.visit(homepage);

      cy.get('#winner')
        .should('be.empty');

      cy.get('#play-button')
        .click();

      cy.get('#first-player-hand')
        .should('not.be.empty');

      cy.get('#second-player-hand')
        .should('not.be.empty');

      cy.get('#winner')
        .should('not.be.empty');
    });
  });

  context('Single user play', () => {
    it('should update first player\'s hand when a hand button is clicked', () => {
      cy.visit(homepage);

      cy.get('#rock-button')
        .click();

      cy.get('#first-player-hand')
        .should('contain', 'Rock');

      cy.get('#paper-button')
        .click();

      cy.get('#first-player-hand')
        .should('contain', 'Paper');

      cy.get('#scissors-button')
        .click();

      cy.get('#first-player-hand')
        .should('contain', 'Scissors');
    });
  });

})
