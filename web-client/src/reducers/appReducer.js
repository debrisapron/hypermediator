import * as actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
  activeModal: null
}

function reducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.APP.HIDE_MODAL:
      return { ...state, activeModal: null }
    default:
      return state
  }
}

export default reducer
