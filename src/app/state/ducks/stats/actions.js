import types from './types'

export const adjustCap = (newCap) => {
  return ({
    types: types.ADJUST_CAP,
    payload: cap
  })
}

export const adjustYears = (minYear, maxYear) => {
  return ({
    types: types.ADJUST_YEARS,
    payload: {"minYear": minYear, "maxYear": maxYear}
  })
}

export default {
  adjustCap,
  adjustYears
}