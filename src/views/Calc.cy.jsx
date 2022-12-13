import Calc from './Calc'

describe('check if it mounts with no errors', () => {
  it('mounts', () => {
    cy.mount(<Calc />)
  })
})

//check if button is disabled until all fields are entered
describe('check if button is disabled until all fields are entered', () => {
  it('button is disabled', () => {
    cy.mount(<Calc />)
    cy.get('button').should('be.disabled')
    cy.get('input.firstop').type('2')
    cy.get('select.operation').type('*')
    cy.get('input.secondop').type('4')
    cy.get('button').should('not.be.disabled')
  })
})
