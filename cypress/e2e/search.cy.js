describe('Google Search', () => {
  it('should search for a query', () => {

    cy.visit('https://google.com')

    cy.get('[name="q"]').type('OpenAI{enter}')

    cy.wait(2000)

    cy.title().should('contain', 'OpenAI')

  })
})