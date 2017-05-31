// Libraries
import React, { Component } from 'react'
import { connect } from 'react-redux'
import Slider from 'rc-slider';

// App Modules
import { sidebarOperations } from '../../state/ducks/sidebar'

// CSS
import '../../../../client/css/sidebar.scss'
import '../../../../client/css/slider.scss';

// Slider Config
const createSliderWithTooltip = Slider.createSliderWithTooltip;
const SliderWithTooltip = createSliderWithTooltip(Slider);
const RangeWithTooltip = createSliderWithTooltip(Slider.Range);


class Sidebar extends Component {
  constructor(props) {
    super(props)

    this.setCapValue = this.setCapValue.bind(this)
    this.setYearsValue = this.setYearsValue.bind(this)
  }

  componentDidMount() {
    const { sidebar } = this.props
  }

  setCapValue(value) {
    const { setCap } = this.props

    // Dispatches an action to update the Slider values in State
    setCap(value)
  }

  setYearsValue(values) {
    const { setYears } = this.props
    
    // Dispatches an action to update the Slider values in State
    setYears(values[0], values[1])
  }

  render() {
    const { sidebar } = this.props

    return (
      <div className="sidebar col-xs-3">
        <div className="cap-slider">
          <div className="row">
            <p className="slider-title col-xs-4">Cap</p>
            <p className="slider-data col-xs-8">{sidebar.cap}%</p>
          </div>
          <SliderWithTooltip 
            min={0} 
            max={10} 
            defaultValue={sidebar.cap} 
            tipFormatter={value => `${value}%`} 
            onAfterChange={this.setCapValue}
          />
        </div>

        <div className="year-slider">
          <div className="row">
            <p className="slider-title col-xs-4">Years:</p>
            <p className="slider-data col-xs-8">{sidebar.years.min} – {sidebar.years.max}</p>
          </div>
          <RangeWithTooltip 
            min={1997}
            max={2016}
            defaultValue={[sidebar.years.min, sidebar.years.max]} 
            onAfterChange={this.setYearsValue}
          />
        </div>
        
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
  setCap: sidebarOperations.setCap,
  setYears: sidebarOperations.setYears
}

export default connect(mapStateToProps, mapDispatchToProps)(Sidebar)
// export default Sidebar


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