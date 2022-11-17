describe('First Card', () => {
    it('On visiting the game section the next card button should be enabled but the fight button should be disabled', () => {
        cy.visit('game')
        cy.get('button').contains('fight').should('not.be.enabled')
        cy.get('button').contains('next card').click()
        cy.get('mat-card').contains('Name of your champion')
    })

    it('On pressing the fight button there should be a toast on the bottom of the screen informing about the result', () => {
        cy.get('button').contains('fight').click()
        cy.get('snack-bar-container').should('be.visible')
    })

    it('On pressing the next card button the opponent should disappear', () => {
        cy.get('button').contains('next card').click()
        cy.get('mat-card').contains('Name of your opponent').should('not.exist')
    })
})