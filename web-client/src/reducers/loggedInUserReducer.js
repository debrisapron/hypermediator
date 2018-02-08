import * as actionTypes from '../actions/actionTypes'
import INITIAL_STATE from './initialState'

function loggedInUserReducer(state = INITIAL_STATE.loggedInUser, action) {
  switch (action.type) {
    case actionTypes.AUTH.LOGIN_SUCCESS:
      return { ...state, data: action.payload.data }
    case actionTypes.AUTH.LOGOUT:
      return { ...state, data: null }
    default:
      return state
  }
}

export default loggedInUserReducer
