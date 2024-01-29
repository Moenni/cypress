/// <reference types= "cypress"/>

describe("hooks",()=>{
    let usuario = {}
    let data;
    before (()=>{
        usuario= {
            "user": "nicomomo1",
            "pass": "Saibaba321@"
        }
     cy.fixture('datos').then(datosFixture =>{
      data=datosFixture
     })
    })
    beforeEach(()=>{
         //Eliminar las tareas existentes para el usuario

      
        cy.log('Before each ')
        cy.visit('')
        cy.get('#registertoggle').dblclick()
        cy.get('#user').type(usuario.user)
        cy.get('#pass').type(usuario.pass)
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click()
        cy.wait(5000)
        cy.get('[data-cy="removeAll"]').click()
    })

    it.only('Primer test',()=>{
        
       cy.get('#task').wait(2000).type(data.tareas.tarea1)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(data.tareas.tarea2)
        cy.get('#sendTask').click()

       cy.get('#task').clear()
        cy.get('#task').wait(2000).type(data.tareas.tarea3)
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