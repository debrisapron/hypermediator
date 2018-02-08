import * as actionTypes from '../actions/actionTypes'
import INITIAL_STATE from './initialState'

function appReducer(state = INITIAL_STATE.app, action) {
  switch (action.type) {
    case actionTypes.APP.HIDE_MODAL:
      return { ...state, activeModal: null }
    default:
      return state
  }
}

export default appReducer
