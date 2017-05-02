import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const App = ( { children } ) => {
  return (
    <div className="layout container">  
      <div className="row">
        { children }
      </div>
    </div>
  )
}

export default App