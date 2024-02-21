/// <reference types ="cypress"/>
import { LoginPage } from "../../support/pages/loginPage";
import { HeaderPage } from "../../support/pages/headerPage";
import { ToDoListPage } from "../../support/pages/toDoListPage";
import { OnlineShopFunction } from "../../support/functions/onlineShopFunction";
import { HomePage } from "../../support/pages/homePage";


describe("Screenshot",()=>{
    let data;
    const loginPage= new LoginPage();
    const homePage = new HomePage();
    const headerPage =new HeaderPage();
    const toDoListPage =new ToDoListPage();  
    const onlineShopFunction = new OnlineShopFunction();
    before(()=>{
        cy.fixture('datos').then(datosFixture =>{
            data= datosFixture
        })
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
  

    it('tomar una foto y validar que no hay tareas disponibles', () => {
        cy.screenshot();
    })

})