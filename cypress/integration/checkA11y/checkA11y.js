import { Then } from 'cypress-cucumber-preprocessor/steps';

Then('I click on projects', () => {
  // Click on projects link in header (using jQuery syntax)
  cy.get('a[href="/projects"]').first().click()
})

Then('I click on tech', () => {
  // Click on tech link in header (using jQuery syntax)
  cy.get('a[href="/tech"]').first().click()
})

Then('I click on contact', () => {
  // Click on contact link in header (using jQuery syntax)
  cy.get('a[href="/contact"]').first().click()
})

Then('I check for a11y violations', () => {
  cy.checkA11y()
})