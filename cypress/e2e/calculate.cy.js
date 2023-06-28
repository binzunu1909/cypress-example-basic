describe('Google Calculator', () => {
  it('should perform a calculation', () => {
    cy.visit('https://www.google.com')

    cy.get('[name="q"]')
      .type('2+3{enter}')

    cy.get('[id="cwos"]')
      .should('have.text', '5')
  })
})
