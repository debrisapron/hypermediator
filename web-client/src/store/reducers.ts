import * as t from '../types'

export default function reducer(state: t.State, action: t.Action): t.State {
  switch (action.type) {
    case t.ActionType.DIALOGUE_FETCH:
      return { ...state, dialogue: undefined, dialogueLoading: true }
    case t.ActionType.DIALOGUE_FETCH_SUCCESS:
      return { ...state, dialogue: action.payload.dialogue, dialogueLoading: false }
    case t.ActionType.DIALOGUE_SUMMARIES_FETCH_SUCCESS:
      return { ...state, dialogueSummaries: action.payload.dialogueSummaries }
    case t.ActionType.STATEMENT_UPDATE_DRAFT:
      return { ...state, draftStatement: action.payload.text }
    case t.ActionType.MODAL_HIDE:
      return { ...state, activeModal: undefined }
    case t.ActionType.LOGIN_MODAL_SHOW:
    case t.ActionType.DIALOGUE_SUMMARIES_FETCH:
    case t.ActionType.STATEMENT_ADD:
    case t.ActionType.REDUX_INIT:
      return state
    default:
      return assertNever(action)
  }
}

function assertNever(action: never): never {
  throw new Error(`Unhandled action: ${JSON.stringify(action)}`)
}
