import types from './types'

export const setCap = (cap) => {
  return ({
    type: types.SET_CAP,
    payload: cap
  })
}

export const setYears = (minYear, maxYear) => {
  return ({
    type: types.SET_YEARS,
    payload: {"min": minYear, "max": maxYear}
  })
}

export default {
  setCap,
  setYears
}