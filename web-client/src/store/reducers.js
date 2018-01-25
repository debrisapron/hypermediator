import * as actionTypes from './actionTypes'

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.FETCH_DIALOGUE:
      return { ...state, dialogue: undefined, dialogueLoading: true }
    case actionTypes.FETCH_DIALOGUE_SUCCESS:
      return { ...state, dialogue: action.payload, dialogueLoading: false }
    case actionTypes.FETCH_DIALOGUE_SUMMARIES_SUCCESS:
      return { ...state, dialogueSummaries: action.payload }
    case actionTypes.UPDATE_DRAFT_STATEMENT:
      return { ...state, draftStatement: action.payload }
    case actionTypes.HIDE_MODAL:
      return { ...state, activeModal: undefined }
    case actionTypes.FETCH_DIALOGUE_SUMMARIES:
    case '@@redux/INIT':
      return state
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default reducer
