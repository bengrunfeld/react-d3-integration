// Libraries
import React from 'react'
import { render } from 'react-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'

// Data
import { data } from './data'

// CSS
import '../css/slider.scss'

// App Modules
import reducers from './reducers'
import Chart from './containers/chart-container'
import Sidebar from './containers/sidebar-container'

let initialState =  {
                      data: data,
                      cap: {min: 0, max: 10},
                      period: {min: 1997, max: 2016}
                    }

let store = createStore(reducers, initialState)

render(
  <Provider store={store}>
    <div className="ru-app">
      <Chart />
      <Sidebar />
    </div>
  </Provider>,
  document.getElementById('main')
)