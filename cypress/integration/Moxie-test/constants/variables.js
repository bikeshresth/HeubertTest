class Register{
    email(){
        return cy.get('input[id="email"]')
    }
    firstName(){
        return cy.get('input[id="first_name"]')
    }
    lastName(){
        return cy.get('input[id="last_name"]')
    }
    nextBtn(){
        return  cy.get('[data-testid=submit-button]').contains('Next')
    }
}

export default Register