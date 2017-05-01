import actions from './actions'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchData = actions.fetchData

export const fetchDataFromApi = (url) => (dispatch, getState) => { 
  console.log('Begin fetch...')
  fetch(url)
    .then((response) => {
      return response.json()
    }).then((data) => {
      dispatch(fetchData(data))
    })
}

export default {
  fetchDataFromApi
}