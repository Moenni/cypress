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
       
    })

    it.skip('Validar el texto del titulo usando should',()=>{
        cy.get('#title').should('have.text',"Todo List")
    })
    it.skip('Validar el texto del titulo usando expect',()=>{
        cy.get('#title').invoke('text').then(texto=>{
            expect(texto).is.equal('Todo List')
        })
    })
     it.skip('Validar el texto del titulo usando assert',()=>{
          cy.get('#title').invoke('text').then(texto=>{
             assert.equal(texto, "Todo List")
            })
    })
    it('Agregar una tarea y validar el nombre y cantidad de tareas existentes',()=>{
         cy.wait(5000)
        cy.get('[data-cy="removeAll"]').click()
        cy.wait(5000)
        cy.get('li').should('not.exist') //validamos que no exista una lista 
        cy.get('#task').wait(2000).type('Hacer la cama')
        cy.get('#sendTask').click()
        cy.wait(5000)
        cy.get('li').should('have.length',1)//validamos que exista 1 lista
        cy.get('li').find('p').invoke('text').should('have.length',13)//validamos que el texto tenga 11 letras y 2 espacios
        cy.get('li').first().find('p').should('have.text','Hacer la cama')
        cy.get('li').first().find('p').click() //completamos la tarea
        cy.wait(6000)
        cy.get('li').first().find('p').should('have.attr','style','text-decoration: line-through;')//validamos que la tearea esta completada

        cy.get('#completed').click()
        cy.wait(6000)
        cy.get('li').should('have.length',1)
     

        cy.get('#active').click()
        cy.wait(6000)
        cy.get('li').should('not.exist')

    })
 })