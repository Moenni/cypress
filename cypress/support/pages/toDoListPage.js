const constantes = require('../constans');

export class ToDoListPage {

    constructor() {
        this.taskInput = '#task';
        this.sendTaskButton = '#sendTask';
        this.removeAllButton = '[data-cy="removeAll"]';
        this.taskLi = '//li';
    };

    escribirTarea(tarea) {
        cy.get(this.taskInput).type(tarea);
    };

    clickSendtask() {
        cy.get(this.sendTaskButton).click();
    };

    clickRemoveAll() {
        cy.get(this.removeAllButton).should('be.visible').click();
    };

    obtenerTarea(tarea) {
        return cy.contains('li', tarea, { timeout: constantes.TIMEOUT });
    };

    obtenerTareas() {
        return cy.xpath(this.taskLi);
    };
};