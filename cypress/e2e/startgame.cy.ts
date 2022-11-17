describe('Game Start', () => {
    it('Should route to different url when clicked on a button and display all texts', () => {
      cy.visit('/')
      cy.get('span').contains('Play').click()
      cy.url().should('includes', 'game')
      cy.contains('"May the force be with you!"')
      cy.contains('Welcome to a new game player!')
      cy.contains('Press a button bellow to pull a new Star Wars card')
    })

    it('Should route back to the / url when clicked on the go back button', () => {
        cy.get('span').contains('Stop').click()
        cy.url().should('includes.not', 'game')
    })

    it('Should show the left navigation bar if clicked on the icon', () => {
        cy.get('span').contains('Stop').click()
        cy.url().should('includes.not', 'game')
    })
})
  