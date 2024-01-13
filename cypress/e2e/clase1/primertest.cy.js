describe('Primer test',() =>{

    it('Registrarse en pushing it',()=>{
        const numeroRandom= Math.floor(Math.random() *1000)
        cy.visit('');
        cy.get('#user').type(`pushingIT${numeroRandom}`);
        cy.get('#pass').type('Saibaba1@')
        cy.get('[value="Male"]').check({force:true})
        cy.get('#day').select('5')//value 4
        cy.get('#month').select('September') //texto visible september
        cy.get('#year').select('1993')//posicion del array 
        cy.get('#submitForm').click({force:true});
        })
})