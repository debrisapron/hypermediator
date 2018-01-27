import * as actionTypes from './actionTypes'

function reducer(state, action) {
  switch (action.type) {
    case actionTypes.APP.HIDE_MODAL:
      return { ...state, activeModal: null }

    case actionTypes.AUTH.LOGIN_SUCCESS:
      return { ...state, loggedInUser: action.payload.loggedInUser }
    case actionTypes.AUTH.LOGOUT:
      return { ...state, loggedInUser: null }

    case actionTypes.DIALOGUE.FETCH:
      return { ...state, dialogue: null, dialogueLoading: true }
    case actionTypes.DIALOGUE.FETCH_SUCCESS:
      return { ...state, dialogue: action.payload, dialogueLoading: false }
    case actionTypes.DIALOGUE.UPDATE_DRAFT_STATEMENT:
      return { ...state, draftStatement: action.payload }

    case actionTypes.DIALOGUE_SUMMARY.FETCH_ALL_SUCCESS:
      return { ...state, dialogueSummaries: action.payload }

    case actionTypes.AUTH.SHOW_LOGIN_MODAL:
    case actionTypes.DIALOGUE_SUMMARY.FETCH_ALL:
    case '@@redux/INIT':
      return state
    default:
      throw new Error(`Unknown action type: ${action.type}`)
  }
}

export default reducer
