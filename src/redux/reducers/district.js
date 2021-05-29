import * as actionTypes from '../actions/actionTypes'

const initialState = {
  fetching: false,
  data: null,
  error: null
}

const district = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.DISTRICT_API_CALL_REQUEST:
      return { ...state, fetching: true, data: null, error: null }
    case actionTypes.DISTRICT_API_CALL_SUCCESS:
      if (action.data.length > 0)
        return { ...state, fetching: false, data: action.data }
      else {
        return { ...state, fetching: false, data: null, error: null }
      }
    case actionTypes.DISTRICT_API_CALL_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error }
    default:
      return state
  }
}

export default district