// ***********************************************
// This example commands.js shows you how to
// create various custom commands and overwrite
// existing commands.
//
// For more comprehensive examples of custom
// commands please read more here:
// https://on.cypress.io/custom-commands
// ***********************************************
//
//
// -- This is a parent command --
// Cypress.Commands.add('login', (email, password) => { ... })
//
//
// -- This is a child command --
// Cypress.Commands.add('drag', { prevSubject: 'element'}, (subject, options) => { ... })
//
//
// -- This is a dual command --
// Cypress.Commands.add('dismiss', { prevSubject: 'optional'}, (subject, options) => { ... })
//
//
// -- This will overwrite an existing command --
// Cypress.Commands.overwrite('visit', (originalFn, url, options) => { ... })
const baseUrl = 'https://pushing-it.onrender.com';

Cypress.Commands.add('deleteProduct', (token, nombreProducto) => {
    cy.request({
        method: 'GET',
        url: `${baseUrl}/api/products`,
        qs: {
            name: nombreProducto
        },
        headers: {
            "authorization": `Bearer ${token}`
        }
    }).its('body.products.docs').each(producto => {
        //Hacer una peticion HTTP que lo elimine // DELETE
        cy.request({
            method: 'DELETE',
            url: `${baseUrl}/api/product/${producto._id}`,
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then(respuesta => {
            expect(respuesta.status).to.be.equal(202);
        });
    });
});

Cypress.Commands.add('createProduct', (token, producto) => {
    cy.request({
        method: "POST",
        url: `${baseUrl}/api/create-product`,
        headers: {
            "authorization": `Bearer ${token}`
        },
        body: producto
    }).then(respuesta => {
        expect(respuesta.status).to.be.equal(201);
    });
})