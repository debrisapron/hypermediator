import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import * as api from '../../services/api'

async function handleStatementAdd(store) {
  let { dialogue, draftStatement } = store.getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  store.dispatch(actions.dialogue.fetch(dialogue.id))
  store.dispatch(actions.dialogue.updateDraftStatement(''))
}

async function handleDialogueFetch(store, id) {
  let dialogue = await api.fetchDialogue(id)
  store.dispatch(actions.dialogue.fetchSuccess(dialogue))
}

async function handleDialogueSummariesFetch(store) {
  let dialogueSummaries = await api.fetchDialogueSummaries()
  store.dispatch(actions.dialogueSummary.fetchAllSuccess(dialogueSummaries))
}

function ApiMiddleware(store) {
  return (next) => (action) => {
    switch (action.type) {
      case actionTypes.DIALOGUE.ADD_STATEMENT:
        handleStatementAdd(store)
        break
      case actionTypes.DIALOGUE.FETCH:
        handleDialogueFetch(store, action.payload)
        break
      case actionTypes.DIALOGUE_SUMMARY.FETCH_ALL:
        handleDialogueSummariesFetch(store)
        break
      default: // Do nothing
    }
    return next(action)
  }
}

export default ApiMiddleware
