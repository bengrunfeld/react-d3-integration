import actions from './actions'

require('es6-promise').polyfill()
require('isomorphic-fetch')

export const fetchData = actions.fetchData

export const fetchDataFromApi = (url) => (dispatch, getState) => { 
  console.log('Begin fetch...')
  fetch(url)
    .then((response) => {
      if(response.ok) {
        return response.json()
      }
      throw new Error('Network response was not ok.')
    }).then((data) => {
      dispatch(fetchData(data))
    }).catch(function(error) {
      console.log('Fetch failed at chart/operations: ' + error.message)
    })
}

export default {
  fetchDataFromApi
}