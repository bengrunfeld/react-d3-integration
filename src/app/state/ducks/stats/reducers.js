import { combineReducers } from 'redux'
import types from './types'

const capReducer = (state=[], action) => 
  (action.type === types.ADJUST_CAP)?
  action.payload:
  state

const yearsReducer = (state=[], action) => 
  (action.type === types.ADJUST_YEARS)?
  action.payload:
  state

export default combineReducers({
  min: capReducer,
  max: capReducer,
  stdv: capReducer,
  count: capReducer,
  avg: capReducer,
})