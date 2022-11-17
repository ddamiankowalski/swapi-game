describe('Showing Score', () => {
    it('Should show the score window if you press on the score button', () => {
        cy.visit('game')
        cy.get('button').contains('score').click()
        cy.get('mat-dialog-container').should('be.visible')
    })

    it('Should close the modal if we press the close button', () => {
        cy.get('button').contains('Close').click();
        cy.get('mat-dialog-container').should('not.exist')
    })
})