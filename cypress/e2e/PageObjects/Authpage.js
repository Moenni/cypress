export class AuthPage{

    toggleScreen(){
        cy.get('#registertoggle').dblclick();
    }
    writeUsername(usuario){
        cy.get('#user').type(usuario)
    }
    writePassword(password){
        cy.get('#pass').type(password)
    }
    clickLogin(){
        cy.contains("Log in").click()
    }
}