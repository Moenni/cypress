/// <reference types= "cypress" />

import {LoginPage} from "../support/pages/loginPage";
import { HomePage } from "../support/pages/homePage";
import { HeaderPage } from "../support/pages/headerPage";
import { ToDoListPage } from "../support/pages/toDoListPage";
import { OnlineShopFunction } from "../support/functions/onlineShopingFunction";
describe("Page Object model", () => {
    let data;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const headerPage = new HeaderPage();
    const toDoListPage = new ToDoListPage();
    const onlineShopFunction = new OnlineShopFunction();
    before(() => {
        cy.fixture('datos').then(datosFixture => {
            data = datosFixture
        });
    });

    beforeEach(() => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(Cypress.env().usuario)
        loginPage.escribirContraseña(Cypress.env().password)
        loginPage.clickLogIn();
        headerPage.getUsername(Cypress.env().usuario)
        homePage.clickToDoListLink();
        toDoListPage.clickRemoveAll();
        toDoListPage.obtenerTareas().should('not.exist');
    });

    it.only('Agregar una tarea y validar el nombre y cantidad de tareas existentes', () => {
        toDoListPage.escribirTarea(data.tareas.tarea1);
        toDoListPage.clickSendtask();
        toDoListPage.obtenerTarea(data.tareas.tarea1).should('exist');
        toDoListPage.obtenerTareas().should('have.length', 1);
        toDoListPage.escribirTarea(data.tareas.tarea2);
        toDoListPage.clickSendtask();
        toDoListPage.obtenerTarea(data.tareas.tarea2);
        toDoListPage.obtenerTareas().should('have.length', 2);
        toDoListPage.escribirTarea(data.tareas.tarea3);
        toDoListPage.clickSendtask();
        toDoListPage.obtenerTarea(data.tareas.tarea3);
        toDoListPage.obtenerTareas().should('have.length', 3);
    });

    it('Escribir un log con onlineShopFunction', () => {
        onlineShopFunction.shoppingCartPage.escribirUnLog('Escribiendo un log usando function')
    })
});