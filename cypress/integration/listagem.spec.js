/// <reference types="cypress" />


context('Listagem', () => {
    it('Listagem sem registros', () => {

        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**', {
            statusCode: 200,
            fixture: 'webtable-get-vazio'
        }).as('getNewtable');
        
        cy.visit('WebTable.html');

        //assertion
        cy.get('div[role=row]').should('have.length',1);//valida se a tabela nao tem nenhum elemento
        });

    it('Listagem com apenas um registro', () => {
        
        cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**', {
            statusCode: 200,
            fixture: 'webtable-get-unico'
        })    
        
        cy.visit('WebTable.html'); 
    
    //assertion
    cy.get('div[role=row] div[role=gridcell]').eq(4).find('div').as('gridCellPhone');
    cy.get('@gridCellPhone').should('contain.text','3129876543');


    });
});