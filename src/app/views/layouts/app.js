import React from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'

const App = ( { children } ) => {
  return (
    <div className="layouts-app">
      <nav>
        <p><Link to='/'>Home</Link></p>
        <p><Link to='/d3'>D3 Chart</Link></p>
        <p><Link to='/svg'>SVG Chart</Link></p>
      </nav>

      { children }

      <footer>
        <p>This is the footer</p>
      </footer>
    </div>
  )
}

export default App