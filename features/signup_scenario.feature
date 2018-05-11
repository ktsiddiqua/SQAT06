Feature: User Registration
  In order to sign up 
  As a developer
  I want to register a new user

  Scenario:  User Registration for Figure1 sign up page
    Given I go to Figure1 sign up page
    When  I enter for username
    And I enter for emailaddress
    And I enter for password
    And I enter for repeatpassword
    And I select a profession
    And I select other speciality
    And I agree to the termsofservice
    And I submit creataccount
    Then  I should see  home logo inside confirmation screen
