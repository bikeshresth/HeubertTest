
describe('Registration_Valid_Credentials',()=>{

    Cypress.config('pageLoadTimeOut',10000)
    before(()=>{
       cy.PersonalDetails()
    })

    it("Institution Details",()=>{
        cy.InstitutionDetails()
        cy.CommonButton()
    })


    it("Pricing Plan Details",()=>{
        cy.PricingPlanDetails()
        cy.CommonButton()
})

    it("Work Order Scope",()=>{
        cy.WorkOrderScope()
        cy.CommonButton()
})

})