// Typings in this module are an absolute shit-show
// import * as redux from 'redux'
import * as t from '../../types'
import * as actions from '../actions'
import * as api from '../../services/api'

async function handleStatementAdd(getState: Function, dispatch: Function) {
  let { dialogue, draftStatement } = getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  await dispatch(actions.fetchDialogue(dialogue.id))
  await dispatch(actions.updateDraftStatement(''))
}

async function handleDialogueFetch(id: string, dispatch: Function) {
  let dialogue = await api.fetchDialogue(id)
  await dispatch(actions.fetchDialogueSuccess(dialogue))
}

async function handleDialogueSummariesFetch(dispatch: Function) {
  let dialogueSummaries = await api.fetchDialogueSummaries()
  await dispatch(actions.fetchDialogueSummariesSuccess(dialogueSummaries))
}

function ApiMiddleware(api: { getState: Function, dispatch: Function }) {
  let { getState, dispatch } = api
  return (next: Function) => (action: any) => {
    switch (action.type) {
      case t.ActionType.STATEMENT_ADD:
        handleStatementAdd(getState, dispatch)
        break
      case t.ActionType.DIALOGUE_FETCH:
        handleDialogueFetch(action.payload.id, dispatch)
        break
      case t.ActionType.DIALOGUE_SUMMARIES_FETCH:
        handleDialogueSummariesFetch(dispatch)
    }
    return next(action)
  }
}

export default ApiMiddleware
