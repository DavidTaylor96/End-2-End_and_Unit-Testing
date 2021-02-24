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

  it('should display a decimal numbers', () => {
    cy.get('#number7').click()
    cy.get('#operator_add').click()
    cy.get('#number7').click()
    cy.get('#operator_divide').click()
    cy.get('#number5').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('2.8')
  })

  it('should display a negative number', () => {
    cy.get('#number5').click()
    cy.get('#operator_subtract').click()
    cy.get('#number7').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('-2')
  })

  it('should be a large number', () => {
    cy.get('#number7').click()
    cy.get('#number7').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_multiply').click()
    cy.get('#number5').click()
    cy.get('#number5').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('4235000000000')
  })

  it("can divide by zero and get 'Try Again'", () => {
    cy.get('#number5').click()
    cy.get('#operator_divide').click()
    cy.get('#number0').click()
    cy.get('#operator_equals').click()
    cy.get('.display').contains('Try Again')
  })

})
