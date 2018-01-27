import * as actionTypes from './actionTypes'

function ActionCreator(type) {
  return (payload) => ({ type, payload })
}

export let app = {
  hideModal: ActionCreator(actionTypes.APP.HIDE_MODAL)
}

export let auth = {
  loginSuccess: ActionCreator(actionTypes.AUTH.LOGIN_SUCCESS),
  logout: ActionCreator(actionTypes.AUTH.LOGOUT),
  showLoginModal: ActionCreator(actionTypes.AUTH.SHOW_LOGIN_MODAL)
}

export let dialogue = {
  fetch: ActionCreator(actionTypes.DIALOGUE.FETCH),
  fetchSuccess: ActionCreator(actionTypes.DIALOGUE.FETCH_SUCCESS),
  statementAdd: ActionCreator(actionTypes.DIALOGUE.STATEMENT_ADD),
  updateDraftStatement: ActionCreator(actionTypes.DIALOGUE.UPDATE_DRAFT_STATEMENT)
}

export let dialogueSummary = {
  fetchAll: ActionCreator(actionTypes.DIALOGUE_SUMMARY.FETCH_ALL),
  fetchAllSuccess: ActionCreator(actionTypes.DIALOGUE_SUMMARY.FETCH_ALL_SUCCESS)
}
