Given(/^que acesso o site$/, () => {
    //rotas
     //POST (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
     //POST (aborted) /api/1/databases/userdetails/collections/usertable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
     //GET (aborted) /api/1/databases/userdetails/collections/newtable?apiKey=YEX0M2QMPd7JWJw_ipMB3a5gDddt4B_X
     
     cy.intercept('POST', '**/api/1/databases/userdetails/collections/newtable?**', {
         statusCode: 200,
         body: {}
     }).as('postNewtable');
   
     cy.intercept('POST', '**/api/1/databases/userdetails/collections/usertable?**', {
         statusCode: 200, 
         body: {}
     }).as('postUsertable');
   
     cy.intercept('GET', '**/api/1/databases/userdetails/collections/newtable?**', {
         statusCode: 200,
         body: {}
     }).as('getNewtable');


     // baseURL+ Register.html(rota)
     cy.visit('Register.html');
 
});