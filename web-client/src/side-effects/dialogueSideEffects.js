import * as actions from '../store/actions'
import * as api from '../services/api'

export async function onAddStatement({ dispatch, getState }) {
  let { dialogue, draftStatement } = getState()
  if (!dialogue) { return } // TODO Error handling
  await api.addStatement(dialogue.id, draftStatement)
  dispatch(actions.dialogue.fetch(dialogue.id))
  dispatch(actions.dialogue.updateDraftStatement(''))
}

export async function onFetch({ dispatch, payload: { id } }) {
  let dialogue = await api.fetchDialogue(id)
  dispatch(actions.dialogue.fetchSuccess(dialogue))
}
