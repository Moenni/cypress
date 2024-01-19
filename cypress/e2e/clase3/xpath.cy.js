describe('Xpath',()=>{
    it('Xpath absoluto',()=>{
        cy.visit('');
        cy.xpath('/html/body/div/div/div/div/form/div[1]/input')
       
    });
    it('Xpath relativo',()=>{
        cy.visit('');
        cy.xpath("//input[@id='user']")
       
    });
    it('Xpath contains',()=>{
        cy.visit('')
        cy.xpath('//input[contains(@class,"password")]')
    })
    it('Xpath starts-with',()=>{
        cy.visit('')
        cy.xpath('//input[starts-with(@class,"chakra-input password")]')
    })
})