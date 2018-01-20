import _ from 'lodash/fp'
import * as t from '../types'

export default function reducer(state: t.State, action: t.Action): t.State {
  switch (action.type) {
    case t.ActionType.DIALOGUE_FETCH_SUCCESS:
      return _.set('dialogue', action.payload.dialogue, state) as t.State
    case t.ActionType.DIALOGUE_SUMMARIES_FETCH_SUCCESS:
      return _.set('dialogueSummaries', action.payload.dialogueSummaries, state) as t.State
    case t.ActionType.STATEMENT_UPDATE_DRAFT:
      return _.set('draftStatement', action.payload.text, state) as t.State
    case t.ActionType.MODAL_HIDE:
      return _.set('activeModal', undefined, state) as t.State
    case t.ActionType.LOGIN_MODAL_SHOW:
      return _.set('activeModal', t.ModalType.LOGIN, state) as t.State
    case t.ActionType.DIALOGUE_FETCH:
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
