/// <reference types= "cypress"/>

describe("hooks",()=>{
    let usuario = {}
    let tareas = {}
    before (()=>{
        usuario= {
            "user": "nicomomo1",
            "pass": "Saibaba321@"
        }
      tareas ={
        'tarea1' : "hacer las compras",
        'tarea2' : "hacer la tarea",
        'tarea3' : "Cocinar"
      }
     
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

    it('Primer test',()=>{
        cy.get('#task').wait(2000).type(tareas.tarea1)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(tareas.tarea2)
        cy.get('#sendTask').click()

        cy.get('#task').clear()
        cy.get('#task').wait(2000).type(tareas.tarea3)
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
    
    afterEach(()=>{
        
        cy.wait(5000)
      
   })
    after(()=>{
        cy.log('After')
    })
})