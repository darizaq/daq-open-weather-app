# DaqOpenWeatherApp

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 6.0.8

[Demo app](https://darizaq.github.io/portfolio/daq-open-weather-app/)

## Local environment

If you want to run the app in your local machine you need to clone this repository and install all the dependencies with `npm install` (NodeJS version: v8.11.2)

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The app will automatically reload if you change any of the source files.


## Application Structure

The application was designed following this structure

**app/**

- **app-routing.module.ts**: Routing configuration for the application

- **app.constants.ts**: App level constants

- **components/**: Reusable components that are used across the applications
 
- **features/**: Feature level components (pages) for the application
 
- **pipes/**: Pipes used across the application
 
- **services/**: Data providers (services) for the application

		
**assets/**

- **styles/**: Common styles for the application


The chosen UI framework was Bootstrap in order to use the mobile first approach.


### Application flow

A control, handeled by `system-toggler` component is placed at the top right of the page to let the user choose the desired units system to show the data, when the value of this control changes, the data on the application is updated.

Temperature and speed values across the application are formatted using `temperature` and `speed` pipes, depending on the selected units system.

There are 3 pages

**Home / City weather list**

List all the cities using the `city-weather` component passing the required information.

When an error occurs in the data request, `error` component is displayed with the detailed error information

**Forecast**

Shows forecast information for the selected city.

A control is shown to let the user choose the number of records, when the value on the control changes, the data is updated.

For the data visualization it uses 2 components:

- `city-forecast` (Detailed information in a table / list way)
- `city-forecast-chart` (Line Chart to show temperature and time)

When an error occurs in the data request, `error` component is displayed with the detailed error information.

**Not found**

Is the fallback page when the user request an invalid route on the application
