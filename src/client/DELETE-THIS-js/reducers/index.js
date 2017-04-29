// Libraries
import { combineReducers } from 'redux'

// App Modules
import { CAP_ADJUST, PERIOD_ADJUST, CHARTING_TECHNIQUE_ADJUST } from '../constants'

function dataReducer(state = {}, action) {
  if(action.type === DATA_FILTER) {
    return {
      data: action.payload
    } 
  } else {
    return state
  }
}

function capReducer(state = {}, action) {
  if(action.type === CAP_ADJUST) {
    return {
      cap: action.payload
    }
  } else {
    return state
  }
}

function periodReducer(state = {}, action) {
  if(action.type === PERIOD_ADJUST) {
    return {
      data: action.payload
    }
  } else {
    return state
  }
}

let reducers = combineReducers({
  cap: capReducer,

})

export default update