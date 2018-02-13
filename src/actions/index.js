import * as actionTypes from './actionTypes'

function ActionCreator(type) {
  return (payload) => ({ type, payload })
}

export let app = {
  setIsBusy: ActionCreator(actionTypes.APP.SET_IS_BUSY)
}

export let auth = {
  loginSuccess: ActionCreator(actionTypes.AUTH.LOGIN_SUCCESS),
  logout: ActionCreator(actionTypes.AUTH.LOGOUT),
  showLoginModal: ActionCreator(actionTypes.AUTH.SHOW_LOGIN_MODAL)
}

export let dialogue = {
  add: ActionCreator(actionTypes.DIALOGUE.ADD),
  updateNewDialogueTitle: ActionCreator(actionTypes.DIALOGUE.UPDATE_NEW_DIALOGUE_TITLE),
  fetch: ActionCreator(actionTypes.DIALOGUE.FETCH),
  fetchSuccess: ActionCreator(actionTypes.DIALOGUE.FETCH_SUCCESS),
  addStatement: ActionCreator(actionTypes.DIALOGUE.ADD_STATEMENT),
  addStatementSuccess: ActionCreator(actionTypes.DIALOGUE.ADD_STATEMENT_SUCCESS),
  updateDraftStatement: ActionCreator(actionTypes.DIALOGUE.UPDATE_DRAFT_STATEMENT)
}

export let dialogueSummary = {
  fetchAll: ActionCreator(actionTypes.DIALOGUE_SUMMARY.FETCH_ALL),
  fetchAllSuccess: ActionCreator(actionTypes.DIALOGUE_SUMMARY.FETCH_ALL_SUCCESS)
}

export let location = {
  home: ActionCreator(actionTypes.LOCATION.HOME),
  dialogue: ActionCreator(actionTypes.LOCATION.DIALOGUE)
}
