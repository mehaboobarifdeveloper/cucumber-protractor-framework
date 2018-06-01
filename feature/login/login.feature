Feature: Launch the application
    Everytime we launch the application login screen should be displayed
    Scenario: Launch and Login to the application
        Given i go to url "http://www.way2automation.com/angularjs-protractor/registeration/#/login"
        When i enter username as "angular"
        And i enter password as "password"
        And i enter user description as "angular"
        Then home page should be displayed