import React from 'react'
import { Route } from 'react-router-dom'
import { App } from '../views/layouts'
import { Home, D3Chart, SvgChart } from '../views/pages'

const routes = () => { 
  return (
      <div>
        <Route exact path="/d3" component={ D3Chart } /> 
        <Route path="/d3/:id/:query" component={ D3Chart } /> 
        <Route path="/svg" component={ SvgChart } />
        <Route exact path="/" component={ Home } />
      </div>
  )
}


export default routes()
  