describe('How to work with Personas', function () {
  it('Add a new Persona by clicking the Add button', function () {
    cy.visit('/persona/new', {failOnStatusCode: false})
    cy.get('input[name="personaName"]').type('Friends', { delay: 25 })
    cy.log('Fill out the name you want to refer to this Persona as')
    cy.get('button[name="addField"]').click()
    cy.log('Click the Add Field button to start adding your information')
    cy.get('input[name="fieldName0"]').type('nickName', { delay: 25 })
    cy.log('Fill out the field name such as "nickName"')
    cy.get('input[name="fieldValue0"]').type('@philt3r', { delay: 25 })
    cy.log('and a value such as "@philt3r"')
    cy.log('Add as many fields as you like')
    cy.get('button[name="addField"]').click()
    cy.get('input[name="fieldName1"]').type('lastName', { delay: 25 })
    cy.get('input[name="fieldValue1"]').type('Beadle', { delay: 25 })
    cy.get('button[name="createPersona"]').click()
    cy.log('Click the Create Persona button to save into your private data.')
  })
})
