describe('template spec', () => {
  it('passes', () => {
    cy.visit('https://example.cypress.io')
  })

  /* ==== Test Created with Cypress Studio ==== */
  it('test automation Login', function() {
    /* ==== Generated with Cypress Studio ==== */
    cy.visit('https://jackrevamp.netlify.app/');
    cy.get(':nth-child(1) > [style="background-color: white; border-radius: 4px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear('h');
    cy.get(':nth-child(1) > [style="background-color: white; border-radius: 4px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('howl@test.co');
    cy.get(':nth-child(2) > [style="background-color: white; border-radius: 4px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').clear('P');
    cy.get(':nth-child(2) > [style="background-color: white; border-radius: 4px;"] > .MuiFormControl-root > .MuiInputBase-root > .MuiInputBase-input').type('Password1');
    cy.get('form > .button').click();
    cy.get(':nth-child(1) > [style="position: relative; width: 100%; border: 1px solid rgb(252, 252, 252); padding: 12px; display: flex; justify-content: space-between; cursor: pointer; border-radius: 8px; filter: none; box-shadow: rgba(50, 50, 50, 0.06) 0px 4px 8px 0px; background-color: transparent; z-index: 10;"] > .d-flex > div > .font12').click();
    cy.get('.styles_pin-input__4YZUu').clear();
    cy.get('.styles_pin-input__4YZUu').type('1234567{enter}');
    /* ==== End Cypress Studio ==== */
  });
})