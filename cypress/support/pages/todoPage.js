///javascript
// Define la clase Page Object para la página en cuestión
export class TodoPage{
  constructor() {
    this.allButton = '#all';
    this.completedButton = '#completed';
    this.activeButton = '#active';
    this.removeAllButton = '#removeAll';
  }

  // Métodos para acceder a los elementos de la página
  getAllButton() {
    return cy.get(this.allButton);
  }

  getCompletedButton() {
    return cy.get(this.completedButton);
  }

  getActiveButton() {
    return cy.get(this.activeButton);
  }

  getRemoveAllButton() {
    return cy.get(this.removeAllButton);
  }
}
