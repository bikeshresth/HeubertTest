import Register from '../constants/variables'
describe("Registration_First_Step", ()=>{
    const variable= new Register();
    it("Agent_information", ()=>{
        cy.visit('https://heubertapp.com/')
        variable.email().type("bikesh@heubert.com")
        variable.firstName().type("Bikesh")
        variable.lastName().type("Shrestha")
        cy.get('input[id="country"]').type('Nepal').should('contain.value','Nepal')
            cy.get('input[id="city_or_state"]').type('Kathmandu')
            variable.nextBtn().should('be.visible').click()
    })
})