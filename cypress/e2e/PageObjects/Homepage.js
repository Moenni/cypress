/// <reference types ="cypress"/>

export class Homepage{
    clickTodoList(){
        cy.get('#todolistlink').click();
    }
}