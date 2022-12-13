describe('calc', () => {
  it('user can do some maths', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('input.firstop').type('2')
    cy.get('select.operation').type('*')
    cy.get('input.secondop').type('4')
    cy.get('button[type="submit"]').click()

    cy.request('POST', 'localhost:5000/api/math', {
      operand1: 2,
      operand2: 4,
      operation: '*'
    }).then((response) => {
      expect(response.data).to.have.property('data', 8)
    })

    cy.get('div.result').should('contain', '8')

  })
})