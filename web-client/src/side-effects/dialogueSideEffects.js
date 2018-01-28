import * as actions from '../store/actions'
import * as api from '../services/api'

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
