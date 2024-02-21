//importar la pagina todoListPage
//importar la pagina loginPage
import { ToDoListPage } from "../support/pages/toDoListPage";
import { LoginPage } from "../support/pages/loginPage";
import {TodoPage} from "../support/pages/todoPage";
describe('Actividad complementaria 6', () => { 
    //generar una instancia de la clase todoListPage
    const todoListPage= new ToDoListPage();
    //generar una instancia de la clase loginPage
    const loginPage= new LoginPage();
    const todoPage = new TodoPage();

         beforeEach("Actividad complementaria 6", () => {
            cy.visit('');
            cy.get("#registertoggle").dblclick();
            loginPage.escribirUsuario(Cypress.env().usuario); // utilizar la clase loginPage para ingresar el usuario
           loginPage.escribirContraseña(Cypress.env().password) // utilizar la clase loginPage para ingresar  la contraseña
            loginPage.clickLogIn(); // utilizar la clase loginPage hacer click en 'Log in'
            cy.xpath(`//h2[starts-with(@id,'user_nicomomo1')]`).should('exist');
            cy.get('#todolistlink').click();
        });
    
          it("deberia verificar que los botones existen", () =>{
            todoPage.getAllButton(todoPage.allButton).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoPage.getCompletedButton(todoPage.completedButton).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoPage.getActiveButton(todoPage.activeButton).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
            todoPage.getRemoveAllButton(todoPage.removeAllButton).should('exist'); //modificarlo usando pageObjectModel. Recorda hacer la asercion en el test
        });
     });
     
     //Modificar el desafio1 y aplicar pageObjecModel
     
     //