/// <reference types= "cypress" />

import {LoginPage} from "../support/pages/loginPage";
import {HomePage} from "../support/pages/homePage";
import {HeaderPage} from "../support/pages/headerPage";

describe("Page Object model", () => {
    let data;
    let token;
    const loginPage = new LoginPage();
    const homePage = new HomePage();
    const headerPage = new HeaderPage();
    const baseUrl = 'https://pushing-it.onrender.com';


    it('GET Method', () => {
        cy.request({
           
            url: `${baseUrl}/api/products`,
            headers: {
                "authorization": `Bearer ${token}`
            },
            qs: {
                "page": 2,
                'limit': 4
            }
        }).then(respuesta => {
            expect(respuesta.body.products.docs).to.have.lengthOf(4);
            expect(respuesta.status).to.be.equal(200);
            ///expect(respuesta.body.products.docs[0].name).to.be.equal('Buzo Negro');
        });
    });

    it('POST Method', () => {
        cy.request({
            method: "POST",
            url: `${baseUrl}/api/create-product`,
            headers: {
                "authorization": `Bearer ${token}`
            },
            body:
            {
                "id": Math.floor(Math.random() * 1000),
                "name": "Buzo Negro",
                "price": 23.76,
                "img": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F79%2Fdc%2F79dc285a8de65daa047c7e6d8fecb475420f9664.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D",
            },
        }).then(respuesta => {
            cy.log(respuesta)
        });
    });

    it ('PUT Method', () => {
        cy.request({
            method: "PUT",
            url: `${baseUrl}/api/product/65cbbb6d00e97a00340961d7`,
            headers: {
                "authorization": `Bearer ${token}`
            },
            body:
            {
                "name": "Buzo Negro",
                "price": 23.76,
                "img": "https://lp2.hm.com/hmgoepprod?set=format%5Bwebp%5D%2Cquality%5B79%5D%2Csource%5B%2F79%2Fdc%2F79dc285a8de65daa047c7e6d8fecb475420f9664.jpg%5D%2Corigin%5Bdam%5D%2Ccategory%5B%5D%2Ctype%5BDESCRIPTIVESTILLLIFE%5D%2Cres%5Bm%5D%2Chmver%5B2%5D&call=url%5Bfile%3A%2Fproduct%2Fmobilemain%5D",
            },
        }).then(respuesta => {
            cy.log(respuesta)
        });
    });

    it.only('DELETE Method', () => {
        cy.request({
            method: "DELETE",
            url: `${baseUrl}/api/product/65cbbb6d00e97a00340961d7`,
            headers: {
                "authorization": `Bearer ${token}`
            }
        }).then(respuesta => {
            cy.log(respuesta)
        });
    });

    before(() => {
        cy.fixture('api').then(dataFixture => {
            data = dataFixture
        });
    });

    beforeEach(() => {
        cy.visit('')
        cy.get('#registertoggle').dblclick();
        loginPage.escribirUsuario(Cypress.env().usuario)
        loginPage.escribirContraseña(Cypress.env().password)
        loginPage.clickLogIn();
        headerPage.getUsername(Cypress.env().usuario)
    });

    it('Buscar, eliminar y crear un product', () => {
        token = window.localStorage.getItem('token');
        // Trabajamos siempre con el mismo producto por test
        // Siempre cada test va a tener un producto UNICO
        //CADA vez qe comienza el test, el producto debe ser eliminado y vuelto a crear

        //Hacer una peticion HTTP que busque nuestro producto //GET
       /// cy.deleteProduct(token, data.producto.name);
        // //Hacer una peticion HTTP que lo vuelva a crear // POST
        //cy.createProduct(token, data.producto);

        cy.get('#onlineshoplink').click();
        cy.wait(5000)
        cy.get('[data-cy="search-bar"]').type(data.producto.name);
        cy.contains('p', data.producto.name).siblings('div').find(`[id="add-to-cart-${data.producto.id}"]`).click();
    });
});