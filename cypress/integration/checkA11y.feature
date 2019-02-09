Feature: Load page without a11y violations
  This test checks a11y violations on page Load

  Scenario: Home page loads with no a11y violations
    Given I visit the homepage
    Then I check for a11y violations

  Scenario: Project page loads with no a11y violations
    Given I visit the homepage
    Then I click on projects
    Then I check for a11y violations

  Scenario: Tech page loads with no a11y violations
    Given I visit the homepage
    Then I click on tech
    Then I check for a11y violations

  Scenario: Contact page loads with no a11y violations
    Given I visit the homepage
    Then I click on contact
    Then I check for a11y violations