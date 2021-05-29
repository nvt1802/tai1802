import * as actionTypes from './actionTypes'

export const initDistrict = (provinceId) => {
  return {
    type: actionTypes.DISTRICT_API_CALL_REQUEST,
    payload: provinceId
  }
}