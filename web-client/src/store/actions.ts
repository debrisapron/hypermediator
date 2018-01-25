import * as t from '../types'

export function addStatement(): t.StatementAddAction {
  return { type: t.ActionType.STATEMENT_ADD }
}

export function fetchDialogue(id: string): t.DialogueFetchAction {
  return { type: t.ActionType.DIALOGUE_FETCH, payload: { id } }
}

export function fetchDialogueSuccess(dialogue: t.Dialogue): t.DialogueFetchSuccessAction {
  return { type: t.ActionType.DIALOGUE_FETCH_SUCCESS, payload: { dialogue } }
}

export function fetchDialogueSummaries(): t.DialogueSummariesFetchAction {
  return { type: t.ActionType.DIALOGUE_SUMMARIES_FETCH }
}

export function fetchDialogueSummariesSuccess(
  dialogueSummaries: t.DialogueSummaries
): t.DialogueSummariesFetchSuccessAction {
  return { type: t.ActionType.DIALOGUE_SUMMARIES_FETCH_SUCCESS, payload: { dialogueSummaries } }
}

export function hideModal(): t.ModalHideAction {
  return { type: t.ActionType.MODAL_HIDE }
}

export function showLoginModal(): t.LoginModalShowAction {
  return { type: t.ActionType.LOGIN_MODAL_SHOW }
}

export function updateDraftStatement(text: string): t.StatementUpdateDraftAction {
  return { type: t.ActionType.STATEMENT_UPDATE_DRAFT, payload: { text } }
}
