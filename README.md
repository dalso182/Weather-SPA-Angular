# WeatherSPA

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 8.3.8.

## Steps to run the application
- clone the code
- run npm install -g @angular/cli@latest
- run npm i
- run ng serve to start the server

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Development Log, these are in a high level, all the steps I took to develop this application
- Whiteboard mockup and component identification
- Properties/Attributes listing
- Created angular app using the CLI, picked sass as css preprocessor and included router
- Folder structure definition: 
    - Layout-components folder contains components related to global layout such as header and footer
    - Routes components folder contains components that are accessible trough the router, these components will usually work as orchestrators of smaller components.
    - Components folder contains all granular components within the application.
    - Modules folder contains the modules in the application
    - Services folder
    - Assets/scss folder contains global styles files (angular son file needed to be modified to point to this folder)-
- Created all components using the cli
- Added angular material to the application and a module was created to handle all the material imports in one single place
- Generated service to handle all the communication with the API
- Added a reset css and the bootstrap grid css to handle responsiveness
- Started to work on the, UI creating the components with harcoded data to adjust and define layout, came with the idea of using cards showing the weather summary per city.
- Created variables file and added the folder in angular.json so they can be imported everywhere
- Created interface and service for city to retrieve the list of cities from a local son file
- Work on an autocomplete feature to allow the user to select the cities to display in the dashboard
- Get current weather functionality, weather Interface, service
- Set up API key and account in open weather
- Connected API with UI
- Even though the API supports request to get temperature in C or F, I decided to create a custom Pipe to convert it

- Forecast component created, created interface for forecast, weather service updated
- Forescast layout created by grouping the results by date
- Layout and data connection implemented
- Updated city card to navigate to the forecast component
