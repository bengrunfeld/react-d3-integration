// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// App Modules
import { chartOperations } from '../../state/ducks/chart'
import { sidebarOperations } from '../../state/ducks/sidebar'

import '../../../client/css/sidebar.scss'

class Sidebar extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { chart, sidebar, fetchData } = this.props
  }

  render() {
    const { sidebar } = this.props

    console.log(sidebar)

    return (
      <div className="sidebar col-xs-3">
        <h4>Sidebar</h4>
      </div>
    )
  }
}

Sidebar.defaultProps = {
  chart: {data: []},
  sidebar: {cap: 0, years: {mix: 1997, max: 2016}} 
}

const mapStateToProps = (state) => {
  return {sidebar: state.sidebar}
}

const mapDispatchToProps = {
  adjustCap: sidebarOperations.adjustCap,
  adjustYears: sidebarOperations.adjustYears
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)


//  NB – Conditionally renders content based on whether the URL Param exists
//  NB – Use `this.props` when inside a stateful React Component
//
//  {this.props.match.params.id ? <p>props.match.params.id</p>: ''}
//  {this.props.match.params.query ? <p>props.match.params.query</p>: ''}


//  NB – Here's how to set up Links to Routes
//  <nav>
//    <p><Link to='/'>Home</Link></p>
//    <p><Link to='/d3'>D3 Chart</Link></p>
//    <p><Link to='/svg'>SVG Chart</Link></p>
//  </nav>