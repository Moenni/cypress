 /// <reference types="cypress" />
 describe("Actividad complementaria", () =>{
   beforeEach("Debe ingresar en el sistema y dirigirse a todolist",() =>{
        cy.visit('https://pushing-front.vercel.app/');
        cy.get('#registertoggle').dblclick();
        cy.get('#user').type('NicolasMomo')
        cy.get('#pass').type('nicolas1@')
        cy.get('#submitForm').click()
        cy.get('#todolistlink').click();
        })
    it("Ingresar una tarea a la lista",()=>{
        const tarea1="Primer tarea"
        cy.get('[name="task"]').type(tarea1)
        cy.get("#sendTask").click()
        cy.contains('Primer tarea').should("exist")
    })
    it.skip("deberia eleminar todas las tareas al clickear en 'remove all'",()=>{
        const tarea1="Primer tarea"
        const tarea2="Segunda tarea"
        const tarea3="Tercer tarea"
        cy.get('[name="task"]').type(tarea1)
        cy.get("#sendTask").click()
        cy.get('[name="task"]').type(tarea2)
        cy.get("#sendTask").click()
        cy.get('[name="task"]').type(tarea3)
        cy.get("#sendTask").click()
        cy.get('#removeAll').click()
    })
    it("Deberia visualizar solamente las tareas completadas en la pestaña 'Completed'",()=>{
        const tarea1="Primer tarea"
        const tarea2="Segunda tarea"
        cy.get('[name="task"]').type(tarea1)
        cy.get("#sendTask").click()
        cy.get('[name="task"]').type(tarea2)
        cy.get("#sendTask").click()
        cy.contains(tarea2).click()
        cy.get('#completed').click()
        cy.contains(tarea2).should("exist")
     })
});