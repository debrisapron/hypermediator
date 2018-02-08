import * as actionTypes from '../actions/actionTypes'
import INITIAL_STATE from './initialState'

function dialogueSummariesReducer(state = INITIAL_STATE.dialogueSummaries, action) {
  switch (action.type) {
    case actionTypes.DIALOGUE_SUMMARY.FETCH_ALL_SUCCESS:
      return { data: action.payload.data }
    default:
      return state
  }
}

export default dialogueSummariesReducer
