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
    it.skip('Agregar una tarea y validar el nombre y cantidad de tareas existentes',()=>{
        cy.get('[data-cy="removeAll"]',{timeout:60000}).should('be.visible').click()
        cy.get('li',{timeout:10000}).should('not.exist') //validamos que no exista una lista 
        cy.get('#task').wait(2000).type('Hacer la cama')
        cy.get('#sendTask').click()
        cy.get('li').first().find('p',{timeout:15000}).should('have.length',1).and('have.text','Hacer la cama')//validamos que exista 1 lista
        cy.get('li').find('p').invoke('text').should('have.length',13)//validamos que el texto tenga 11 letras y 2 espacios
        cy.get('li').first().find('p').click() //completamos la tarea
        cy.get('li').first().find('p').should('have.attr','style','text-decoration: line-through;')//validamos que la tearea esta completada
        cy.get('#completed').click()
        cy.get('li').should('have.length',1)
        cy.get('#active').click()
        cy.get('li').should('not.exist')

    })
    it('Validar timeouts con should',()=>{
        cy.get('[data-cy="removeAll"]',{timeout:60000}).should('be.visible').click()
        cy.get('li',{timeout:10000}).should('not.exist') //validamos que no exista una lista 
        cy.get('#task').wait(2000).type('Hacer la cama')
        cy.get('#sendTask').click()
        //cy.get('li',{timeout:15000}).first().find('p',{timeout:15000}).should('have.length',1).and('have.text','Hacer las camas')//validamos que exista 1 lista
        cy.get('li',{timeout:15000}).find('p',{timeout:15000}).invoke('text').then(text=>{
            expect(text).to.be.equal('hacer las camas');
        })
      
    })
    it.skip('Agregar una tarea y validar el nombre y cantidad de tareas existentes usando expect',()=>{
        cy.wait(5000)
       cy.get('[data-cy="removeAll"]').click()
       cy.wait(5000)
       cy.get('li').should('not.exist') //validamos que no exista una lista 
       cy.get('#task').wait(2000).type('Hacer la cama')
       cy.get('#sendTask').click()
       cy.wait(5000)
       cy.get('li').should('have.length',1)//validamos que exista 1 lista
       cy.get('li').find('p').invoke('text').then(text =>{
            expect(text).to.have.length(13)
       })
       cy.get('li').first().find('p').invoke('text').then(texto =>{
            expect(texto).to.be.equal('Hacer la cama')
       })
       cy.get('li').first().find('p').click() //completamos la tarea
       cy.wait(6000)
       cy.get('li').first().find('p').invoke('attr','style').then(style=>{
        
            expect(style).to.be.equal('text-decoration: line-through;')
       })
       cy.get('#completed').click()
       cy.wait(6000)
       cy.get('li').should('have.length',1)
    

       cy.get('#active').click()
       cy.wait(6000)
       cy.get('li').should('not.exist')

   })
 })