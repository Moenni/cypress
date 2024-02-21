export class LoginPage {

    constructor() {
        this.userInput = '#user'
        this.passInput = '#pass'
        this.logInButton = '#submitForm'
    };

    escribirUsuario(usuario) {
        cy.get(this.userInput).type(usuario);
    };

    escribirContraseña() {
        cy.get(this.passInput).type("saibaba321@");
    };

    clickLogIn() {
        cy.get(this.logInButton).click();
    };
};