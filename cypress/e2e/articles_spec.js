import cy, { Cypress } from 'cypress';

describe('Articles App', () => {
    beforeEach(() => {
      cy.visit('/');
    });
  
    it('displays the navbar', () => {
      cy.get('.navbar').should('be.visible');
      cy.get('.navbar a').contains('Home').should('be.visible');
      cy.get('.navbar a').contains('About').should('be.visible');
      cy.get('.navbar a').contains('Contact').should('be.visible');
    });
  
    it('displays the article list', () => {
      cy.get('.article-list').should('be.visible');
      cy.get('.article-card').should('have.length.greaterThan', 0);
    });
  
    it('navigates to article details on click', () => {
      cy.get('.article-card').first().click();
      cy.url().should('include', '/article');
      cy.get('.article-details').should('be.visible');
    });
  
    it('allows navigating back to the home page', () => {
      cy.get('.article-card').first().click();
      cy.get('.navbar a').contains('Home').click();
      cy.url().should('eq', `${Cypress.config().baseUrl}/`);
      cy.get('.article-list').should('be.visible');
    });
  });
  