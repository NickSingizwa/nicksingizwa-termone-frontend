describe('calc', () => {
  it('user can do some maths', () => {
    cy.visit('http://127.0.0.1:5173/')
    cy.get('input.firstop').type('2')
    cy.get('select.operation').type('*')
    cy.get('input.secondop').type('4')
    cy.get('button[type="submit"]').click()

    cy.request('POST', 'localhost:8080/api/maths', {
      firstop: 2,
      secondop: 4,
      operator: '*'
    }).then((response) => {
      expect(response.body).to.have.property('result', 8)
    })

    cy.get('div.result').should('contain', '8')

  })
})