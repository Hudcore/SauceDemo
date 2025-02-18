
 
 beforeEach(() => {
    Cypress.session.clearAllSavedSessions()
        cy.visit('https://www.saucedemo.com/')
        cy.login()    /* metodo customizado para login, salvo no arquivo /support/commands.js */
        
      
  });

 

describe('Testes manipulando produtos',function(){


it('Adicionar produto ao carrinho e atualiza badge',function(){

    cy.get('[data-test="add-to-cart-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').contains('1')
})


it('Remove produto do carrinho e atualiza badge'),function() {

    cy.get('[data-test="remove-sauce-labs-backpack"]').click()
    cy.get('[data-test="shopping-cart-badge"]').not().contains('.shopping_cart_badge')
    
}



})

