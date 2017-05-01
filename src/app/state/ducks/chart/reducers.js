import { combineReducers } from 'redux'
import types from './types'

const dataReducer = (state=[], action) => 
  (action.type === types.FETCH_DATA)?
  action.payload:
  state

export default combineReducers({
  data: dataReducer
})