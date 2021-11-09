/* eslint-disable no-undef */
describe('Home Page', () => {
  it('Should go to Page Detail, click Wishlist and go to Wishlist Page', () => {
    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/planets?page=1' }, { fixture: 'planets_page_1.json' }).as('getPlanetList');

    cy.visit('/');

    cy.wait('@getPlanetList').then(({ response }) => {
      const { statusCode, body } = response;
      expect(statusCode).equal(200);
      expect(body).haveOwnPropertyDescriptor('results');
    });

    cy.get('a p').contains('Tatooine').click();

    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/planets/1' }, { fixture: 'detail_tatooine.json' }).as('getDetail');

    cy.url().should('include', '/planet/1');

    cy.visit('/planet/1');

    cy.wait('@getDetail').then(({ response }) => {
      const { statusCode } = response;
      expect(statusCode).equal(200);
    });

    cy.get('svg').click();

    cy.get('svg').should('have.attr', 'class').should('include', 'bi bi-star');

    cy.get('span').contains('Back').click();

    cy.get('a').contains('Wishlist').click();

    cy.get('a p').contains('Tatooine');
  });
});
