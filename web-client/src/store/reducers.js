import * as actionTypes from './actionTypes'

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.AUTHENTICATE_SUCCESS:
      return { ...state, loggedInUser: action.payload.loggedInUser }
    case actionTypes.FETCH_DIALOGUE:
      return { ...state, dialogue: null, dialogueLoading: true }
    case actionTypes.FETCH_DIALOGUE_SUCCESS:
      return { ...state, dialogue: action.payload, dialogueLoading: false }
    case actionTypes.FETCH_DIALOGUE_SUMMARIES_SUCCESS:
      return { ...state, dialogueSummaries: action.payload }
    case actionTypes.UPDATE_DRAFT_STATEMENT:
      return { ...state, draftStatement: action.payload }
    case actionTypes.HIDE_MODAL:
      return { ...state, activeModal: null }
    case actionTypes.FETCH_DIALOGUE_SUMMARIES:
    case actionTypes.SHOW_LOGIN_MODAL:
    case '@@redux/INIT':
      return state
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default reducer
