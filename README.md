# React Redux Express Starter App

Use as a basic app to 

## Installation

* `npm install`
* `npm start`

## Testing

**Run unit tests:**

* `npm run test`
* `npm run coverage`


## Issues 

* There are some development issues around `react-router`. Read more [here](https://github.com/ReactTraining/react-router/issues/4752).
* Nodemon does not offer hot reloading on successful Webpack build, so a slightly hacky work around was used that utilizes Web Sockets and `setTimeout` on Nodemon restart. 

## APP HIGHLIGHTS:

* Hot reloading with Webapp Dev server - watches port 4000, but only uses a copy of the template - use for dev for anything where you don't need to pass data between the client and the server. 
* Hot reloading with Nodemon - watches port 3000 and uses true template - i.e. if you want to pass data between the server and the client, use this, although you must reload the page (`Cmd + r`) for every change. 
* Adheres to [Re-ducks](https://github.com/alexnm/re-ducks) methodology for creating massively scalable apps
* Implements an Express API that can grab data from a database using Isomorphic-Fetch
* Integrates D3 and React seamlessly using declarative JSX elements instead of D3 to manipulate the DOM
* Specific SASS files are only loaded on pages where they are absolutely needed, alleviating style bloat
* Action Creators utilize Redux-Thunks for asynchronous actions
* Post requests handled with Body-Parser
* Babel transpiles ES6 (ES2015) as well as JSX to Vanilla Javascript, so ES6 `import` statements will work inside of your Node files
* Unit Testing and Coverage Reports use JEST, which exceeds the capabilities and performance of Mocha, Chai, and other testing libraries
* Deep Linking to Chart Type (D3 or SVG) as well as data query (e.g 5% cap between 2000-2005).


## Advanced Redux Concepts

* `Operations` - We want to separate the thunks from the action creators, even with the cost of writing extra code. So we define an operation as a wrapper over actions. If the operation only dispatches a single action — doesn’t actually use redux-thunk — we forward the action creator function. If the operation uses a thunk, it can dispatch many actions and chain them with promises. Operations are part of the public interface of the duck. Actions are encapsulated, operations are exposed. [Read more](https://medium.freecodecamp.com/scaling-your-redux-app-with-ducks-6115955638be)



