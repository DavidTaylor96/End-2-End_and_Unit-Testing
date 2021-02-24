// https://docs.cypress.io/api/introduction/api.html

describe('calculator', () => {
  beforeEach(() => {
    cy.visit('/')
  });

  it('should test the buttons and display in running total', () => {
    cy.get('#number1',).click();
    cy.get('.display').should('contain', '1')
    cy.get('#number2',).click();
    cy.get('.display').should('contain', '2')
    cy.get('#number3',).click();
    cy.get('.display').should('contain', '3')
    cy.get('#number4',).click();
    cy.get('.display').should('contain', '4')
    cy.get('#number5',).click();
    cy.get('.display').should('contain', '5')
    cy.get('#number6',).click();
    cy.get('.display').should('contain', '6')
    cy.get('#number7',).click();
    cy.get('.display').should('contain', '7')
    cy.get('#number8',).click();
    cy.get('.display').should('contain', '8')
    cy.get('#number9',).click();
    cy.get('.display').should('contain', '9')
    cy.get('#number0',).click();
    cy.get('.display').should('contain', '0')
  })

  it('should show the a calculator doing arithmetic', () => {
    cy.get('#number5').click()
    cy.get('#operator_add').click()
    cy.get('#number6').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('11')
  })

  it('should multiply a chain of numbers', () => {
    cy.get('#number3').click()
    cy.get('#operator_multiply').click()
    cy.get('#number3').click()
    cy.get('#operator_multiply').click()
    cy.get('#number3').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('27')
  })

  it('should')


})
