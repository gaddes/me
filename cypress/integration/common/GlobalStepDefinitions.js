import { Given } from 'cypress-cucumber-preprocessor/steps';

Given('I visit the homepage', () => {
  // Empty string defaults to baseUrl defined in cypress.json
  cy.visit('')
  cy.injectAxe()
})