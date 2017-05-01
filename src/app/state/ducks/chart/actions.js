import types from './types'

export const fetchData = (data) => {
  return ({
    type: types.FETCH_DATA,
    payload: data
  })
}

export default {
  fetchData
}