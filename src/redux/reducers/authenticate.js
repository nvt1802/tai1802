import * as actionTypes from '../actions/actionTypes'

const initialState = {
    fetching: false,
    data: null,
    error: null
}

const authenticate = (state = initialState, action) => {
    switch (action.type) {
        case actionTypes.AUTHENTICATE_API_CALL_REQUEST:
            return { ...state, fetching: true, data: null, error: null }
        case actionTypes.AUTHENTICATE_API_CALL_SUCCESS:
            return { ...state, fetching: false, data: action.data }
        case actionTypes.AUTHENTICATE_API_CALL_FAILURE:
            return { ...state, fetching: false, data: null, error: action.error }
        default:
            return state
    }
}

export default authenticate