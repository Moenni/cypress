describe("Actividad complementaria 3", () =>{
	// instalar la dependencia cypress-xpath
  // remplazar todos los selectores 'cssSelectors' por expresiones xpath
  // recorda usar el metodo cy.xpath y agregar la dependencia en el archivo e2e.
    it('Actividad complementaria 3', () =>{
        cy.visit('');
        cy.xpath("//span[text()='Iniciá sesión']").dblclick()
        cy.xpath("//input[@name='user']").type(`pushingit`);
        cy.xpath("//input[starts-with(@type,'password')]").type('123456!');
        cy.xpath("//button[text()='Log in']").click()
        cy.xpath("//a[starts-with(text(),'To Do List')]").click()
        cy.xpath("//input[@name='task']").type("tarea 1")
        cy.xpath("//div//following-sibling::button[text()='Send']").click()
        cy.xpath("//p[text()='tarea 1']" ).click()
    });
});


//Si queres practicar mas podes rehacer el desafio 1 cambiando todos los selectores que usaste por expresiones xpath!!!!

//https://drive.google.com/file/d/1rqB9EFo1M4rhJdGnVVQqgAQKKJawAmml/view?usp=drive_link