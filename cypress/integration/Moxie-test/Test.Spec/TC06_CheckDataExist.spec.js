
describe('Checking if the data are available after navigating back to previous pages',()=>{

    Cypress.config('pageLoadTimeOut',10000)
    before(()=>{
       cy.PersonalDetails()
    })

    it("Institution Details",()=>{
        cy.InstitutionDetails()
        cy.CommonButton();
    })


    it("Pricing Plan Details",()=>{
        cy.PricingPlanDetails()
        cy.CommonButton();
})

    it("Work Order Scope",()=>{
        cy.WorkOrderScope()
        cy.BackButton()
})


    it("Checks Data for Pricing Plan",()=>{
        cy.title().should('eq','Luzon')
        cy.PricingPlanDetails()
        cy.wait(2000)
        cy.BackButton()
    })  

    it("Checks Data for Instituion Page",()=>{
        cy.title().should('eq','Luzon')
        cy.get('[data-testid="institution-details-form"]').children().as('institution')
        cy.get('@institution').contains('Institution')
        cy.get('input').first().invoke('val').should('not.be.empty')
        cy.get('input').eq(1).invoke('val').should('not.be.empty')
        cy.get('input').last().invoke('val').should('not.be.empty')
        cy.wait(2000)
        cy.BackButton()
    })
    it("Checks Data for Personal Details Page",()=>{
        cy.title().should('eq','Luzon')
        cy.location('protocol').should('eq','https:')
        cy.get('[data-testid="personal-details-form"]').children().as('personal')
        
        cy.get('@personal').contains('Country')
        cy.get('input').first().invoke('val').should('not.be.empty')
        cy.get('input').eq(1).invoke('val').should('not.be.empty')
        cy.get('input').eq(2).invoke('val').should('not.be.empty')
        cy.get('input').eq(4).invoke('val').should('not.be.empty')
        
    })
})
    