describe('About View Testing', () => {
  const baseURL = 'http://localhost:3000/'

  beforeEach(() => {
    cy.visit(`${baseURL}About`);
  });
  it('Should display my name', () => {
    cy.get('.name').should('contain', 'Connor Anderson-Larson')
  })
  it('Should display an about me segment', () => {
    cy.get('.caption').should('contain', 'About Me')
  })
  it('Should have three in-site navigation buttons', () => {
    cy.get('.navBtn').should('have.length', 3)
  })
  it('Should have a Home, About, and Portfolio button', () => {
    cy.get('.navBtn').should('contain', 'Home')
    cy.get('.navBtn').should('contain', 'About')
    cy.get('.navBtn').should('contain', 'Portfolio')
  })
  it('Should have About selected on page select', () => {
    cy.get('[aria-current="page"]').should('contain', 'About')
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
