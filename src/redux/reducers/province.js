import * as actionTypes from '../actions/actionTypes'

const initialState = {
  fetching: false,
  data: null,
  error: null
}

const province = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.PROVINCE_API_CALL_REQUEST:
      return { ...state, fetching: true, data: null, error: null }
    case actionTypes.PROVINCE_API_CALL_SUCCESS:
      return { ...state, fetching: false, data: action.data }
    case actionTypes.PROVINCE_API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error }
    default:
      return state
  }
}

export default province