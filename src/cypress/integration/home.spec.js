/* eslint-disable no-undef */

import {
  thousandFormat,
  dateFormat,
} from '../../helper';

describe('Adding Wislist Item', () => {
  it('Should From Home, go to Page Detail, click Star to add to Wishlist and go to Wishlist Page', () => {
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

  it('Should have created date data on Page Detail', () => {
    cy.intercept({ method: 'GET', url: 'https://swapi.dev/api/planets/1' }, { fixture: 'detail_tatooine.json' }).as('getDetail');

    cy.visit('/planet/1');

    cy.wait('@getDetail').then(({ response }) => {
      const { statusCode } = response;
      expect(statusCode).equal(200);
    });

    const rowCreated = cy.get('main div').last();

    rowCreated.get('p').last().contains('Tuesday, December 9, 2014');
  });
});

describe('Functions', () => {
  it('Call the thousandFormat function and asert the number', () => {
    const thousandFormatted = thousandFormat('10000000');
    expect(thousandFormatted).to.equal('10.000.000');
  });

  it('Call the thousandFormat function and asert the number', () => {
    const dateFormatted = dateFormat('2014-12-10T11:35:48.479000Z');
    expect(dateFormatted).to.equal('Wednesday, December 10, 2014');
  });
});
