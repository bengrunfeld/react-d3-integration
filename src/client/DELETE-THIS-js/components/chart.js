// Libraries
import React from 'react'
import * as d3 from 'd3'

// CSS
require('../../css/style.scss')

function chart(data) {
  const width = 600
  const height = 400

  let parseDate = d3.timeParse("%m/%d/%y")

  let dateMinAndMax = d3.extent(data, d => parseDate(d.date))
  let closeMinAndMax = d3.extent(data, d => d.close)
  let adjCloseMinAndMax = d3.extent(data, d => d.adj_close)

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

  return line(data)
}

const App = ({ data, onClick }) => (
  <div>
    <svg width='100%' height='600'>
      <g transform='translate(50, 50)'>
        <path d={chart(data)} className='path-0'></path>
      </g>
    </svg>
  </div>
)

export default App