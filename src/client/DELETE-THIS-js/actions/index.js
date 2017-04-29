// App Modules
import { CAP_ADJUST, PERIOD_ADJUST, CHARTING_TECHNIQUE_ADJUST } from '../constants'

export function adjust_cap(data) {
  return {
    type: CAP_ADJUST,
    payload: data
  }
}

export function adjust_period(data) {
  return {
    type: PERIOD_ADJUST,
    payload: data
  }
}

export function adjust_charting_technique(data) {
  return {
    type: CHARTING_TECHNIQUE_ADJUST,
    payload: data
  }
}

