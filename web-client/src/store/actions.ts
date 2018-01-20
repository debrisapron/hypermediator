import * as reduxThunk from 'redux-thunk'
import * as t from '../types'
import * as api from './api'

type ThunkAction = reduxThunk.ThunkAction<Promise<void>, t.State, void>

export function hideModal(): t.ModalHideAction {
  return { type: t.ActionType.MODAL_HIDE }
}

export function showLoginModal(): t.LoginModalShowAction {
  return { type: t.ActionType.LOGIN_MODAL_SHOW }
}

export function addStatement(): ThunkAction {
  return async (dispatch, getState) => {
    let { dialogue, draftStatement } = getState()
    if (!dialogue) {
      throw new Error('Cannot add a statement without a loaded dialogue')
    }
    await api.addStatement(dialogue.id, draftStatement)
    await dispatch(fetchDialogue(dialogue.id))
    dispatch(updateDraftStatement(''))
  }
}

export function fetchDialogue(id: string): ThunkAction {
  return async (dispatch) => {
    let dialogue = await api.fetchDialogue(id)
    dispatch(fetchDialogueSuccess(dialogue))
  }
}

export function fetchDialogueSummaries(): ThunkAction {
  return async (dispatch) => {
    let dialogueSummaries = await api.fetchDialogueSummaries()
    dispatch(fetchDialogueSummariesSuccess(dialogueSummaries))
  }
}

export function updateDraftStatement(text: string): t.StatementUpdateDraftAction {
  return { payload: { text }, type: t.ActionType.STATEMENT_UPDATE_DRAFT }
}

function fetchDialogueSuccess(dialogue: t.Dialogue): t.DialogueFetchSuccessAction {
  return { payload: { dialogue }, type: t.ActionType.DIALOGUE_FETCH_SUCCESS }
}

function fetchDialogueSummariesSuccess(dialogueSummaries: t.DialogueSummaries):
  t.DialogueSummariesFetchSuccessAction {
  return { payload: { dialogueSummaries }, type: t.ActionType.DIALOGUE_SUMMARIES_FETCH_SUCCESS }
}
