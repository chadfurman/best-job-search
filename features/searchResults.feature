Feature: Search results display on the page
  Scenario:
  As a user
  In order to find jobs
  I should see search results when I click on the search button
    When I visit the homepage
    And I click the search button
    Then I should see search results
    And the search results should have a name
    And the title of the search results should be a link
