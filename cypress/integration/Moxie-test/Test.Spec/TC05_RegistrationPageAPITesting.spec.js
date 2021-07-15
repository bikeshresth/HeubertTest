
describe('API testing',()=>{
    Cypress.config('baseUrl','https://jsonplaceholder.typicode.com')
    it('GET - read',()=>{
        cy.request('GET','/todos/1').then((response)=>{
            expect(response).to.have.property('status',200)
            expect(response.body).to.not.be.null
            expect(response.body.data).to.have.length(1)
        })
    })

    it('POST-create',()=>{
        const item={
        title: 'foo',
        body: 'bar',
        userId: 1}
        cy.request('POST',"/posts",item)
            .its('body')
            .its('data')
            .should('deep.equal',item)
            cy.wrap({ foo: 'bar' }).its('quux').should('not.exist')
    })
})