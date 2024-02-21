 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
    const numero = Math.floor(Math.random() * 1000)
    it('Actividad complementeria Registro', () =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('[value= "Male"]').check({force:true})
        cy.get('#day').select('5')
        cy.get('#month').select('September')
        cy.get('#year').select('1993')
        cy.get('#submitForm').click({force:true})
        

    });
    it('Actividad complementaria Login', ()=>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click();
        
    });
});

//Si tenes ganas de seguir practicando te propongo que con lo aprendido en clase te registres al sistema con los siguientes datos 
// usuario: 'pushingit'
// contraseña '123456!'
//Para ir al login tienen que hacer doble click en el elemento 'incia sesion'