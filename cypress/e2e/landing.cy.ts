describe('Front page test', () => {
    it('Should visit the initial project page', () => {
      cy.visit('/')
      cy.contains('Star Wars API')
      cy.contains('If you want to start a new game, press the button below')
      cy.contains('Play')
      cy.contains('GitHub')
    })

    it('Should expand the navbar section when clicked on the hamburger icon', () => {
        cy.visit('/')
        cy.get('mat-sidenav').should('not.be.visible')
        cy.get('mat-toolbar app-globalbutton').first().click()
        cy.get('mat-sidenav').should('be.visible')
    })

    it('Should go back to the main screen when clicked on the middle', () => {
        cy.get('mat-sidenav').should('be.visible')
        cy.get('.mat-drawer-backdrop').first().click()
        cy.get('mat-sidenav').should('not.be.visible')
    })
  })
  