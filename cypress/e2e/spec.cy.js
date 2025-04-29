/// <reference types="cypress"/>

describe('US-012-Funcionalidade: cadastro de membros', () => {
  it('Deve fazer o cadastro de campos obrigatorios', () => {
    cy.visit('http://192.168.1.8:8080/')
    cy.get('#signup-firstname').type('Kaique')
    cy.get('#signup-lastname').type('Baptista')
    cy.get('#signup-email').type('kaique@teste234.com')
    cy.get('#signup-phone').type('302939242')
    cy.get('#signup-password').type('Kaique@203')
    cy.get('#signup-button').click()
    cy.get('#signup-response').should('contain' , 'Cadastro realizado com sucesso!')

  })
})