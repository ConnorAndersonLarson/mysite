const baseURL = 'http://localhost:3000/'

describe('Home View Testing', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}`);
  });
  it('Should display my name', () => {
    cy.get('.name').should('contain', 'Connor Anderson-Larson')
  })
  it('Should display current project being worked on', () => {
    cy.get('.caption').should('contain', 'My Current Project')
  })
  it('Should have three in-site navigation buttons', () => {
    cy.get('.navBtn').should('have.length', 3)
  })
  it('Should have a Home, About, and Portfolio button', () => {
    cy.get('.navBtn').should('contain', 'Home')
    cy.get('.navBtn').should('contain', 'About')
    cy.get('.navBtn').should('contain', 'Portfolio')
  })
  it('Should have Home selected on page load', () => {
    cy.get('[aria-current="page"]').should('contain', 'Home')
    cy.get('[aria-current="page"]').should('have.class', 'selected')
  })
  it('Should have four external links in the footer', () => {
    cy.get('.footerBtn').should('have.length', 4)
  })
  it('Should have a LinkedIn, GitHub, Terminal, and Support button', () => {
    cy.get('.footerBtn').should('contain', 'LinkedIn')
    cy.get('.footerBtn').should('contain', 'GitHub')
    cy.get('.footerBtn').should('contain', 'Terminal')
    cy.get('.footerBtn').should('contain', 'Support Me')
  })
})

describe('About View Testing', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}Portfolio`);
  });
  it('Should display my name', () => {
    cy.get('.name').should('contain', 'Connor Anderson-Larson')
  })
  it('Should display a Past Projects segment', () => {
    cy.get('.caption').should('contain', 'Past Projects')
  })
  it('Should have three in-site navigation buttons', () => {
    cy.get('.navBtn').should('have.length', 3)
  })
  it('Should have a Home, About, and Portfolio button', () => {
    cy.get('.navBtn').should('contain', 'Home')
    cy.get('.navBtn').should('contain', 'About')
    cy.get('.navBtn').should('contain', 'Portfolio')
  })
  it('Should have Portfolio selected on page select', () => {
    cy.get('[aria-current="page"]').should('contain', 'Portfolio')
    cy.get('[aria-current="page"]').should('have.class', 'selected')
  })
  it('Should have four external links in the footer', () => {
    cy.get('.footerBtn').should('have.length', 4)
  })
  it('Should have a LinkedIn, GitHub, Terminal, and Support button', () => {
    cy.get('.footerBtn').should('contain', 'LinkedIn')
    cy.get('.footerBtn').should('contain', 'GitHub')
    cy.get('.footerBtn').should('contain', 'Terminal')
    cy.get('.footerBtn').should('contain', 'Support Me')
  })
})

describe('About View Testing', () => {
  beforeEach(() => {
    cy.visit(`${baseURL}Portfolio`);
  });
  it('Should display my name', () => {
    cy.get('.name').should('contain', 'Connor Anderson-Larson')
  })
  it('Should display a Past Projects segment', () => {
    cy.get('.caption').should('contain', 'Past Projects')
  })
  it('Should have three in-site navigation buttons', () => {
    cy.get('.navBtn').should('have.length', 3)
  })
  it('Should have a Home, About, and Portfolio button', () => {
    cy.get('.navBtn').should('contain', 'Home')
    cy.get('.navBtn').should('contain', 'About')
    cy.get('.navBtn').should('contain', 'Portfolio')
  })
  it('Should have Portfolio selected on page select', () => {
    cy.get('[aria-current="page"]').should('contain', 'Portfolio')
    cy.get('[aria-current="page"]').should('have.class', 'selected')
  })
  it('Should have four external links in the footer', () => {
    cy.get('.footerBtn').should('have.length', 4)
  })
  it('Should have a LinkedIn, GitHub, Terminal, and Support button', () => {
    cy.get('.footerBtn').should('contain', 'LinkedIn')
    cy.get('.footerBtn').should('contain', 'GitHub')
    cy.get('.footerBtn').should('contain', 'Terminal')
    cy.get('.footerBtn').should('contain', 'Support Me')
  })
})
