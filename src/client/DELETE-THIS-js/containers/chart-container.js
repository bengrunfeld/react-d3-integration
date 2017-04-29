// Libraries
import React from 'react'
import { connect } from 'react-redux'

// App Modules
import App from '../components/chart'
import { update_data } from '../actions'

const mapStateToProps = (state) => {
  return {
    data: state.data
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onClick: (data) => {
      dispatch(update_data(data))
    }
  }
}

const AppContainer = connect(
  mapStateToProps,
  mapDispatchToProps
)(App)

export default AppContainer