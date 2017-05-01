import React, { Component } from 'react'
import { connect } from 'react-redux'
import { chartOperations } from '../../state/ducks/chart'
import { sidebarOperations } from '../../state/ducks/sidebar'

// App Modules
import { App } from '../layouts'

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

    console.log(chart)

    return (
      <App>
        <div>
          <h1>This is D3</h1>
        </div>

        {/* Conditionally renders content based on whether the URL Param exists */}
        {this.props.match.params.id ? <p>props.match.params.id</p>: ''}
        {this.props.match.params.query ? <p>props.match.params.query</p>: ''}
      </App>
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
//     {props.match.params.id ? <p>props.match.params.id</p>: ''}
//     {props.match.params.query ? <p>props.match.params.query</p>: ''}
//   </App>
// )