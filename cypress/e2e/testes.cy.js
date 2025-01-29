beforeEach(() => {
  cy.visit('https://www.saucedemo.com/');
});

describe('Testes de login', function() {
  
  
  it('Login realizado com sucesso', () => {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    })













  })