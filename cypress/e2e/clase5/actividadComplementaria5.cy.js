//Codeshare logo
 //ShareSign UpLog In

describe('Actividad complementaria 5', () => { 
    const timeout = 10000;
     beforeEach("Prcondiciones", () => {
        cy.visit('');
        cy.get("#registertoggle").dblclick()
        cy.get('#user').type('pushingit')
        cy.get('#pass').type('123456!')
        cy.get('#submitForm').click()
        cy.get(`[id*='user_pushingit']`).should('exist')
        cy.get('#waitslink').click()
        cy.get('button#wait').dblclick()
    })
    it.skip("Deberia validad la primera espera", () =>{
      // Verificar que el boton 'cargando' su texto vuelva a ser 'button'. ('have.text')
      cy.get('button#wait').should('have.text','Cargando')
      cy.get('button#wait',{timeout:10000}).should('have.text','Button')
  })
    it.skip("Deberia validad la primera espera", () =>{
      // verificar que exista un elemento cuyo texto sea 'Wait 5 more seconds' ('have.text')
      cy.get('[data-cy="colorChangeMessage"]',{timeout:20000}).should('have.text','Wait 5 more seconds')
  })
    it("Deberia validad la primera espera", () => {

      // Verificar que el primer mensaje que aparece a los 10 luego de 5 segundos mas sea diferente. (que cambie el mensaje) ('have.text') 2 lineas de codigo
      cy.get('[id="message"]',{timeout:15000}).should('have.text','You have waited for ten seconds, CONGRATULATIONS')
      cy.get('[id="message"]',{timeout:15000}).should('have.text','You are a man of patience and have waited fifteen seconds')

  })

 })


//JOBS

