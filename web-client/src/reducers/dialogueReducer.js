import * as actionTypes from '../actions/actionTypes'

let INITIAL_STATE = {
  newDialogueTitle: '',
  isLoading: false,
  draftStatement: '',
  data: null
}

function dialogueReducer(state = INITIAL_STATE, action) {
  switch (action.type) {
    case actionTypes.DIALOGUE.FETCH:
      return { ...state, data: null, isLoading: true }
    case actionTypes.DIALOGUE.FETCH_SUCCESS:
      return { ...state, data: action.payload.data, isLoading: false }
    case actionTypes.DIALOGUE.UPDATE_DRAFT_STATEMENT:
      return { ...state, draftStatement: action.payload.text }
    case actionTypes.DIALOGUE.UPDATE_NEW_DIALOGUE_TITLE:
      return { ...state, newDialogueTitle: action.payload.text }
    default:
      return state
  }
}

export default dialogueReducer
