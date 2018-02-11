import * as actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
  isBusy: false
}

function appReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.APP.SET_IS_BUSY:
      return { ...state, isBusy: action.payload.isBusy }
    default:
      return state
  }
}

export default appReducer
