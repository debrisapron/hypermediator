import * as actionTypes from './actionTypes'

function ActionCreator(type) {
  return (payload) => ({ type, payload })
}

export let addStatement = ActionCreator(actionTypes.ADD_STATEMENT)
export let authenticateSuccess = ActionCreator(actionTypes.AUTHENTICATE_SUCCESS)
export let fetchDialogue = ActionCreator(actionTypes.FETCH_DIALOGUE)
export let fetchDialogueSuccess = ActionCreator(actionTypes.FETCH_DIALOGUE_SUCCESS)
export let fetchDialogueSummaries = ActionCreator(actionTypes.FETCH_DIALOGUE_SUMMARIES)
export let fetchDialogueSummariesSuccess = ActionCreator(actionTypes.FETCH_DIALOGUE_SUMMARIES_SUCCESS)
export let hideModal = ActionCreator(actionTypes.HIDE_MODAL)
export let logout = ActionCreator(actionTypes.LOGOUT)
export let showLoginModal = ActionCreator(actionTypes.SHOW_LOGIN_MODAL)
export let updateDraftStatement = ActionCreator(actionTypes.UPDATE_DRAFT_STATEMENT)
