 /// <reference types="cypress" />
import {AuthPage }  from "../PageObjects/Authpage";
import {Homepage }  from "../PageObjects/Homepage";
import { TodoListPage } from "../PageObjects/todoListPage1"
 describe('Todo list Fixture', () =>{
   const authPage =new AuthPage();
   const homePage =new Homepage();
   const todoListPage =new TodoListPage();

    beforeEach("Debe ingresar en el sistema y dirigirse a todolist",() =>{
        cy.visit('https://pushing-front.vercel.app/');
        authPage.toggleScreen()
        authPage.escribirUsuario('NicolasMomo')
        authPage.escribirContraseña('nicolas1@')
        authPage.clickLogin()
        homePage.clickTodoList()
        })
    it("Ingresar una tarea a la lista",()=>{
        const tarea1="Primer tarea"
        todoListPage.enviarTarea(tarea1)
        todoListPage.verificarTareaExistente(tarea1)
    })
    it("deberia eleminar todas las tareas al clickear en 'remove all'",()=>{
        const tarea1="Primer tarea"
        const tarea2="Segunda tarea"
        const tarea3="Tercer tarea"
        todoListPage.enviarTarea(tarea1)
        todoListPage.enviarTarea(tarea2)
        todoListPage.enviarTarea(tarea3)
        todoListPage.clickRemoveAll()
    })
    it("Deberia visualizar solamente las tareas completadas en la pestaña 'Completed'",()=>{
        const tarea1="Primer tarea"
        const tarea2="Segunda tarea"
        todoListPage.enviarTarea(tarea1)
        todoListPage.enviarTarea(tarea2)
        todoListPage.completarTarea(tarea2) 
        todoListPage.clickCompletedPestaña()
        todoListPage.verificarTareaExistente(tarea2) 
     })
});