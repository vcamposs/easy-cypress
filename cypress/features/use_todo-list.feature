Feature: Use todo-list

  Scenario: Add and delete item
    Given Open "/"
    When I am redirect to "http://localhost:3000/"
    And I fill "newItemField" with "Buy cinema ticket"
    And I click on "markAsCompleted" button
    And I click on "markAsDeleted" button
    And I click on "addBtn" button
    Then I verify the element "todoItem" with text "Buy cinema ticket"