/// <reference types= "cypress"/>

describe("hooks",()=>{
   
    let data;
    before (()=>{
      
     cy.fixture('datos').then(datosFixture =>{
      data=datosFixture
     })
    })
    beforeEach(()=>{
         //Eliminar las tareas existentes para el usuario

      
        cy.log('Before each ')
        cy.visit('')
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type(Cypress.env().usuario)
        cy.get('#pass').type(Cypress.env().password)
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click()
        cy.wait(5000)
        cy.get('[data-cy="removeAll"]').click()
    })

    it.only('Primer test',()=>{
        //data.productos.precioTotal= data.productos.producto1.precio +data.productos.producto2.precio
        //cy.log(data.productos.precioTotal)
        data.tareas.tarea4 = 'Hacer la cama'
       cy.get('#task').wait(2000).type(data.tareas.tarea1)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(data.tareas.tarea2)
        cy.get('#sendTask').click()

       cy.get('#task').clear()
        cy.get('#task').wait(2000).type(data.tareas.tarea3)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(data.tareas.tarea4)
        cy.get('#sendTask').click()
    })

    it('Segundo test',()=>{
        cy.get('#task').wait(2000).type(tareas.tarea1)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(tareas.tarea2)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(tareas.tarea3)
        cy.get('#sendTask').click()
    })
    
 
})