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
  console.log('onAddStatement')
  let { dialogue } = getState()
  console.log(dialogue)
  if (!dialogue.data) { return } // TODO Error handling
  await api.addStatement(dialogue.data.id, dialogue.draftStatement)
  dispatch(actions.dialogue.fetch({ dialogueId: dialogue.data.id }))
  dispatch(actions.dialogue.updateDraftStatement({ text: '' }))
}

export async function onFetch({ dispatch, payload: { dialogueId } }) {
  let data = await api.fetchDialogue(dialogueId)
  dispatch(actions.dialogue.fetchSuccess({ data }))
  return { data }
}
