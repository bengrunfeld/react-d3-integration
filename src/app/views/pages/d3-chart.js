// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

// App Modules
import { chartOperations } from '../../state/ducks/chart'

// CSS
import '../../../client/css/chart.scss'

class Chart extends Component {
  constructor(props) {
    super(props)

    this.calculatePath = this.calculatePath.bind(this)
  }

  componentDidMount() {
    const { fetchData } = this.props
    fetchData('http://localhost:3000/data')
  }

  calculatePath(data, width, height, cap, years) {
    let parseDate = d3.timeParse("%m/%d/%y")
    let parseYears = d3.timeParse("%m/%d/%Y")

    let minYears = parseYears(`11/30/${years.min}`)
    let maxYears = parseYears(`12/31/${years.max}`)

    let deriverdData = data.filter((d, i) => {
      let parsedDate = parseDate(d.date)
      return (parsedDate >= minYears && parsedDate <= maxYears)
    })

    let dateMinAndMax = d3.extent(deriverdData, d => parseDate(d.date))
    let closeMinAndMax = d3.extent(deriverdData, d => d.close)
    let adjCloseMinAndMax = d3.extent(deriverdData, d => d.adj_close)

    let x = d3.scaleTime()
              .domain(dateMinAndMax)
              .range([0, width])
    let y = d3.scaleLinear()
              .domain(closeMinAndMax)
              .range([height, 0])

    let yAxis = d3.axisLeft(y)
    let xAxis = d3.axisBottom(x)

    let margin = {left: 50, right: 50, top: 50, bottom: 0}

    let line = d3.line()                      
                    .x(d => x(parseDate(d.date)))
                    .y(d => y(d.close))

    return line(deriverdData)
  }

  componentDidUpdate() {

  }

  render() {
    const { chart, sidebar } = this.props

    return (
      <svg className="chart-container">
        <path d={this.calculatePath(chart.data, 500, 600, sidebar.cap, sidebar.years)} className="path-0" />
      </svg>
    )
  }
}

Chart.defaultProps = {
  chart: {data: []},
  sidebar: {cap: 5, years: {min: 2005, max: 2012}},
  stats: {min: 0, max: 0, stdv: 0, count: 0, avg: 0}
}

const mapStateToProps = (state) => {
  return {
    chart: state.chart,
    sidebar: state.sidebar
  }
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