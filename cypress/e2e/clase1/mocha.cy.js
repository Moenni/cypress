describe('Mocha',() =>{
    const alumno = 'Juan'
    it('Primer test con Mocha',() =>{
        cy.log('Primer test con Mocha con' + alumno);
    });

    it('Segundo test con Mocha',() =>{
        cy.log('Segundo test con Mocha con' +alumno);
    });
});
describe('Mocha',() =>{
    const alumno = 'Juan'
    it.skip('Primer test con Mocha',() =>{
        cy.log('Primer test con Mocha con' + alumno);
    });

    it('Segundo test con Mocha',() =>{
        cy.log('Segundo test con Mocha con' +alumno);
    });
    it('Test fuera de la suite de pruebas',() =>{
        cy.log('test fuera del describe con' + alumnos);
    });
});

