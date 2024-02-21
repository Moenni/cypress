describe('Actividad complementaria 7', () => { 
    
    beforeEach("Actividad complementaria 7", () => {
       cy.visit('');
       cy.get("#registertoggle").dblclick()
       cy.get('#user').type('pushingit1')
       cy.get('#pass').type('123456!')
       cy.get('#submitForm').click()
       cy.xpath(`//h2[starts-with(@id,'user_pushingit1')]`).should('exist')
       cy.contains('To Do List').click()
   })

     it("Deberia sacar una foto completa", () =>{
       //agregar 3 tareas y sacar una foto a la pantalla completa
       cy.get('[data-cy="removeAll"]',{timeout:60000}).should('be.visible').click()
       cy.get('#task').wait(5000).type('Cocinar')
       cy.get('#sendTask').click()
       cy.get('#task').wait(5000).type('Planchar')
       cy.get('#sendTask').click()
      cy.get('#task').wait(5000).type('Estudiar')
       cy.get('#sendTask').click()
       cy.wait(10000)
       cy.screenshot()
   })
 
   it("Deberia sacar una foto a las tres tareas", () =>{
       //agregar 3 tareas y sacar una foto a las tareas (las 3 tareas en la misma foto - cuadro celeste)
       cy.get('[data-cy="removeAll"]',{timeout:60000}).should('be.visible').click()
       cy.get('#task').wait(2000).type('Cocinar')
       cy.get('#sendTask').click()
       cy.get('#task').wait(2000).type('Planchar')
       cy.get('#sendTask').click()
      cy.get('#task').wait(2000).type('Estudiar')
       cy.get('#sendTask').click()
       cy.wait(5000)
       cy.get('.css-ha1fhc').screenshot() 
       
   })
})

// Instalar git
// Inicializa un repositorio en github desde visual studio code
// Subi el repositorio completo. Recorda usar .gitignore para ignorar la carpeta node modules
// recorda usar los comandos git add (o usa visual studio code para elegir los archivos) // git commit -m "mensaje" // git push origin {nombre de tu branch}
// SI es la primera vez que usas git te va a pedir que pongas las credenciales y autorices github en el navegador

