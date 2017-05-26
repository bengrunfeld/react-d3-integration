// Libraries
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux'

// App Modules
import configureStore from '../app/state/store'
import chartRoutes from '../app/routes'
import { App } from '../app/views/layouts'
import { Sidebar } from '../app/views/pages'
import { sidebarOperations } from '../app/state/ducks/sidebar'

let initialState = {
  chart: {data: []},
  sidebar: {cap: 5, years: {min: 2005, max: 2012}},
  stats: {min: 0, max: 0, stdv: 0, count: 0, avg: 0}
}

// Store
let store = configureStore(initialState)

const getRoot = () => {
  return (
    <Provider store={store}>
      <HashRouter>
        <App>
          { chartRoutes }
          <Sidebar />
        </App>
      </HashRouter>
    </Provider>
  )
}

// Root renderer for the app
render(getRoot(),document.getElementById('main'))
