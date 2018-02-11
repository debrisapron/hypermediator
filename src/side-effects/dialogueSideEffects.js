import * as actions from '../actions'
import * as api from '../services/api'
import * as reduxFirstRouter from 'redux-first-router'

export async function onAdd({ dispatch, getState }) {
  dispatch(actions.app.setIsBusy({ isBusy: true }))
  let {
    dialogue: { newDialogueTitle },
    loggedInUser: { data: { id: creatorId } }
  } = getState()
  let id = await api.addDialogue(newDialogueTitle, creatorId)
  reduxFirstRouter.push(`/d/${id}`)
}

export async function onAddStatement({ dispatch, getState }) {
  let { dialogue, draftStatement } = getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  dispatch(actions.dialogue.fetch({ id: dialogue.id }))
  dispatch(actions.dialogue.updateDraftStatement({ text: '' }))
}

export async function onFetch({ dispatch, payload: { dialogueId } }) {
  let data = await api.fetchDialogue(dialogueId)
  dispatch(actions.dialogue.fetchSuccess({ data }))
  return { data }
}
