// Libraries
import React from 'react'
import { render } from 'react-dom'
import { HashRouter, Route, Link } from 'react-router-dom'
import { Provider, connect } from 'react-redux'
import { createStore } from 'redux'


class Root extends React.Component {
  render(){
    return (
      <h1>Root</h1>
    )
  }
}

class Ben extends React.Component {
  render(){
    return (
      <h1>Hello Ben</h1>
    )
  }
}

class Alex extends React.Component {
  render(){
    return (
      <h1>Hello Alex</h1>
    )
  }
}

render(
  <HashRouter>
    <div>
      <Route path='/ben' component={Ben} />
      <Route path='/alex' component={Alex} />
      <Route exact path='/' component={Root} />
    </div>
  </HashRouter>,
  document.getElementById('main')
)
