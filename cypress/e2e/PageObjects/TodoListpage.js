/// <reference types ="cypress"/>

export class TodoListPage{

    enviarTarea(){
        cy.get('#task').type(`${tarea}{enter}`)
    }
    
}