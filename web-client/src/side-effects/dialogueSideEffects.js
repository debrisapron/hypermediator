import * as reactRouterRedux from 'react-router-redux'
import * as actions from '../actions'
import * as api from '../services/api'

export async function onAdd({ dispatch, getState }) {
  let {
    dialogue: { newDialogueTitle },
    loggedInUser: { data: { id: creatorId } }
  } = getState()
  let id = await api.addDialogue(newDialogueTitle, creatorId)
  dispatch(reactRouterRedux.push(`/d/${id}`))
}

export async function onAddStatement({ dispatch, getState }) {
  let { dialogue, draftStatement } = getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  dispatch(actions.dialogue.fetch({ id: dialogue.id }))
  dispatch(actions.dialogue.updateDraftStatement({ text: '' }))
}

export async function onFetch({ dispatch, payload: { id } }) {
  let data = await api.fetchDialogue(id)
  dispatch(actions.dialogue.fetchSuccess({ data }))
}
