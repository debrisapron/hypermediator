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
  let { dialogue, loggedInUser } = getState()
  if (!(dialogue.data && loggedInUser.data)) { return } // TODO Error handling
  let statement = await api.addStatement(
    dialogue.data.id,
    loggedInUser.data.id,
    dialogue.draftStatement
  )
  statement = { ...statement, user: loggedInUser.data }
  dispatch(actions.dialogue.addStatementSuccess({ statement }))
}

export async function onFetch({ dispatch, payload: { dialogueId } }) {
  let data = await api.fetchDialogue(dialogueId)
  dispatch(actions.dialogue.fetchSuccess({ data }))
  return { data }
}
