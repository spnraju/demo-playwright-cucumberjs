Feature: User login

  Scenario: User login successfully with valid credentials
    Given user is in login page
    When user enters valid credentials
    Then user should be able to see homepage