# Interview Scheduler
A project built with the React framework. Accesses data from a (separate) API server in order to display and update information regarding interviews.

# Project Stack

Front-End: React, Axios, JSX, HTML, SASS, JavaScript

Back-End: Express, Node.js, PostgreSQL

Testing: Storybook, Webpack Dev Server, Jest, Testing Library and Cypress


!["screenshot of new appointment page"](https://github.com/ramanmand/lighthouse-labs-scheduler/blob/master/docs/Booking%20an%20appointment.png)

!["screenshot of delete an appointment"](https://github.com/ramanmand/lighthouse-labs-scheduler/blob/master/docs/Deleting%20an%20appointment.png)

!["screenshot of Landing page"](https://github.com/ramanmand/lighthouse-labs-scheduler/blob/master/docs/Landing%20Page.png)
## Setup

Install dependencies with `npm install`.

## Running Webpack Development Server

```sh
npm start
```

## Running Jest Test Framework

```sh
npm test
```

## Running Storybook Visual Testbed

```sh
npm run storybook
```
## Dependencies
- Axios
- Classnames
- Normalize.css
- React
- React-dom
- React-scripts
- Babel/core
- Storybook/addon-actions
- Storybook/addon-backgrounds
- Storybook/addon-links
- Storybook/addons
- Storybook/react
- Testing-library/jest-dom
- Testing-library/react
- Testing-library/react-hooks
- Babel-loader
- Node-sass
- Prop-types
- React-test-renderer

## Additional information
Scheduler API server and client server should run simultaneously for full functionality. Follow to steps below to access the API:
- Start by forking and cloning the scheduler-api server [here](https://github.com/lighthouse-labs/scheduler-api).
- Follow the steps outlined in README to install and setup the database
- Fork and clone this repo
- Navigate to the root directory and install dependencies with npm install
- Once you have the database setup and the scheduler-api server running, run the following command - from the root directory of the project `npm start`.