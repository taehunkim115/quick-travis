describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('restaurant card opens properly', () => {
    cy.visit ('/');
    cy.get('[data-cy=restaurant]').should('contain', 'Lunch, Dinner Available');
    cy.get('[data-cy=restaurantname]').should('contain', 'Koco Table');
  });

  it('filter for shinsen evanston works ', () => {
    cy.visit ('/');
    cy.get('[data-cy=vibe]').click();
    cy.get('[data-cy=goodforclient]').click();
    cy.get('[data-cy=restaurant]').should('contain' ,'Shinsen Evanston');
  });
});