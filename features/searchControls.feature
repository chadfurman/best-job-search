Feature: Search controls should exist
    Scenario:
    As a user
    In order to specify companies of interest
    I can select criteria for which I want results
        When I visit the homepage
        Then I should see all of the "companies" in a multi-select box
        And I should see all of the "categories" in a multi-select box
        And I should see all of the "levels" in a multi-select box
        And I should see all of the "locations" in a multi-select box
