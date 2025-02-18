beforeEach(() => {
  cy.visit('https://www.saucedemo.com/');
});

describe('Testes de login', function() {
  
  
  it('Login realizado com sucesso', function() {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    })

  it ('Usuário certo e senha errada', function()
  {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="password"]').type('Secret_Sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })

  
  it ('Usuário errado e senha certa', function()
  {
    cy.get('[data-test="username"]').type('standard_userrr')
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username and password do not match any user in this service')
  })


  it ('Login sem senha - não permitido', function()
  {
    cy.get('[data-test="username"]').type('standard_user')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Password is required')
  })


  it ('Login sem usuário - não permitido', function()
  {
    cy.get('[data-test="password"]').type('secret_sauce')
    cy.get('[data-test="login-button"]').click()
    cy.get('[data-test="error"]').contains('Epic sadface: Username is required')
  })


  })