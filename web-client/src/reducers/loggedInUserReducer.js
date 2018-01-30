import * as actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
  data: null
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.AUTH.LOGIN_SUCCESS:
      return { ...state, data: action.payload.data }
    case actionTypes.AUTH.LOGOUT:
      return { ...state, data: null }
    default:
      return state
  }
}

export default reducer
