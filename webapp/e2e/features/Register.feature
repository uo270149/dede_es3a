Feature: Registering a new user

Scenario: The user is already registered on the website
  Given Data from an existing user
  When I fill the data in the form
  Then Error

Scenario: Dont fill all the data in the form
  Given Nothing information
  When I dont fill the data in the form
  Then Error

Scenario: The user is not registered in the site
  Given An unregistered user
  When I fill the data in the form and press submit
  Then A confirmation message should be shown in the screen