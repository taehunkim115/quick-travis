describe ('Test App', () => {

  it ('launches', () => {
    cy.visit ('/');
  });

  it ('restaurant card opens properly', () => {
    cy.visit ('/');
    cy.get('[data-cy=restaurant]').should('contain', 'Lunch, Dinner Available');
    cy.get('[data-cy=restaurantname]').should('contain', 'Koco Table');
  });
});