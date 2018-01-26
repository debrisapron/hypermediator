import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import * as api from '../../services/api'

async function handleStatementAdd(store) {
  let { dialogue, draftStatement } = store.getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  store.dispatch(actions.fetchDialogue(dialogue.id))
  store.dispatch(actions.updateDraftStatement(''))
}

async function handleDialogueFetch(store, id) {
  let dialogue = await api.fetchDialogue(id)
  store.dispatch(actions.fetchDialogueSuccess(dialogue))
}

async function handleDialogueSummariesFetch(store) {
  let dialogueSummaries = await api.fetchDialogueSummaries()
  store.dispatch(actions.fetchDialogueSummariesSuccess(dialogueSummaries))
}

function ApiMiddleware(store) {
  return (next) => (action) => {
    switch (action.type) {
      case actionTypes.ADD_STATEMENT:
        handleStatementAdd(store)
        break
      case actionTypes.FETCH_DIALOGUE:
        handleDialogueFetch(store, action.payload)
        break
      case actionTypes.FETCH_DIALOGUE_SUMMARIES:
        handleDialogueSummariesFetch(store)
        break
      default: // Do nothing
    }
    return next(action)
  }
}

export default ApiMiddleware
