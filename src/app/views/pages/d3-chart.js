// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'

// App Modules
import { chartOperations } from '../../state/ducks/chart'
import { sidebarOperations } from '../../state/ducks/sidebar'



class Chart extends Component {
  constructor(props) {
    super(props)
  }

  componentDidMount() {
    const { chart, sidebar, fetchData } = this.props
    fetchData('http://localhost:3000/data')
  }

  render() {
    const { chart } = this.props

    return (
      <div className="chart d3 col-xs-9">
        <div>
          <h1>This is D3</h1>
        </div>
      </div>
    )
  }
}

Chart.defaultProps = {
  chart: {data: []},
  sidebar: {cap: 0, years: {mix: 1997, max: 2016}} 
}

const mapStateToProps = (state) => {
  return {chart: state.chart}
}

const mapDispatchToProps = {
  fetchData: chartOperations.fetchDataFromApi  
}

export default connect(mapStateToProps, mapDispatchToProps)(Chart)

// export default (props) => (
//   <App>
//     <div><h1>This is D3</h1></div>
// 
//     {/* Conditionally renders content based on whether the URL Param exists */}
//      // Use this.props when inside a stateful React Component
//     {this.props.match.params.id ? <p>props.match.params.id</p>: ''}
//     {this.props.match.params.query ? <p>props.match.params.query</p>: ''}
//   </App>
// )