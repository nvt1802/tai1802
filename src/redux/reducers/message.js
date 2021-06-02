import * as actionTypes from "../actions/actionTypes"

const initialState = {
  fetching: false,
  data: null,
  error: null,
}

const message = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.MESSAGE_REQUEST:
      return { ...state, fetching: true, data: null, error: null }
    case actionTypes.MESSAGE_SUCCESS:
      return { ...state, fetching: false, data: action.data }
    case actionTypes.MESSAGE_FAILURE:
      return { ...state, fetching: false, data: null, error: action.error }
    default:
      return state
  }
}

export default message
