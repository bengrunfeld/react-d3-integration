// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'
import * as d3 from 'd3'

// App Modules
import { chartOperations } from '../../../state/ducks/chart'

// CSS
import '../../../../client/css/chart.scss'

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
    const parseDate = d3.timeParse("%m/%d/%y")
    const parseYears = d3.timeParse("%m/%d/%Y")

    const minYears = parseYears(`11/30/${years.min}`)
    const maxYears = parseYears(`12/31/${years.max}`)

    const deriverdData = data.filter((d, i) => {
      const parsedDate = parseDate(d.date)
      return (parsedDate >= minYears && parsedDate <= maxYears)
    })

    const dateMinAndMax = d3.extent(deriverdData, d => parseDate(d.date))
    const closeMinAndMax = d3.extent(deriverdData, d => d.close)
    const adjCloseMinAndMax = d3.extent(deriverdData, d => d.adj_close)

    const x = d3.scaleTime()
              .domain(dateMinAndMax)
              .range([0, width])
    const y = d3.scaleLinear()
              .domain(closeMinAndMax)
              .range([height, 0])

    const yAxis = d3.axisLeft(y)
    const xAxis = d3.axisBottom(x)

    const margin = {left: 50, right: 50, top: 50, bottom: 0}

    const line = d3.line()                      
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
        {/* TODO: Pull width and height from a constants file */}
        <path d={this.calculatePath(chart.data, 500, 500, sidebar.cap, sidebar.years)} className="path-0" />
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