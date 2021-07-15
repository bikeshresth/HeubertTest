import 'cypress-file-upload';

Cypress.Commands.add('PersonalDetails',()=>{
    cy.visit('/')
        cy.title().should('eq','Luzon')
        cy.location('protocol').should('eq','https:')
        cy.get('[data-testid="personal-details-form"]').children().as('personal')
        cy.get('input').first().type("Bikesh").invoke('val').should('not.be.empty')
        cy.get('input').eq(1).type("Shrestha").invoke('val').should('not.be.empty')
        cy.get('input').eq(2).type("23bikesh@heubert.com").invoke('val').should('match', /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)
        cy.get('input').eq(3).click()
        cy.get('input').eq(3).type('Nepa{enter}')
        cy.get('input').eq(4).type('Kathmandu').invoke('val').should('not.be.empty')
        cy.CommonButton()
})


Cypress.Commands.add('InstitutionDetails',()=>{
        cy.title().should('eq','Luzon')
        cy.get('[data-testid="institution-details-form"]').children().as('institution')
        cy.get('@institution').contains('Institution')
        cy.get('input').first().type("Heubert Technologies").invoke('val').should('not.be.empty')
        cy.get('input').eq(1).type('HEUB').invoke('val').should('match', /^[A-Z]+$/i)
        cy.get('input').eq(2).click()
        cy.contains('CEO').click()
        cy.get('input').last().type('9899909822').invoke('val').should('match', /^[0-9]+$/)
})

Cypress.Commands.add('PricingPlanDetails',()=>{
        cy.title().should('eq','Luzon')
        cy.contains('Starter').click()
})

Cypress.Commands.add('WorkOrderScope',()=>{
    /*creating child for the root element*/
        cy.get('[data-tesid="work-order-scope-form"]').children().as('work')

        /* For dropdown && First Child */
        cy.get('input').first().click();
        cy.contains('Marketing').click()
        cy.get('input').eq(1).type("2")
        cy.get('input').eq(2).type("4")
        
        cy.get('input').eq(3).click()
        cy.get('input').eq(3).type('Nepa{enter}').type('Aus{enter}')
        cy.get('div').eq(4).click()
        cy.get('input').last().type("1000")
})
  
Cypress.Commands.add('CommonButton',()=>{
    cy.get('[data-testid=submit-button]').click()
})

Cypress.Commands.add('BackButton',()=>{
    cy.contains('Back').click()
})


