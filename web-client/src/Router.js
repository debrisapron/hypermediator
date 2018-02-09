import * as reduxFirstRouter from 'redux-first-router'
import * as actions from './actions'
import * as actionTypes from './actions/actionTypes'

let ROUTES = {
  [actionTypes.LOCATION.HOME]: {
    path: '/',
    thunk: Transition(actions.dialogueSummary.fetchAll)
  },
  [actionTypes.LOCATION.DIALOGUE]: {
    path: '/d/:dialogueId',
    thunk: Transition(actions.dialogue.fetch)
  },
  [actionTypes.LOCATION.DIALOGUE_CREATOR]: {
    path: '/create-dialogue'
  }
}

function Transition(action) {
  return async (dispatch, getState) => {
    let payload = getState().location.payload
    await dispatch(action(payload))
  }
}

function Router(history) {
  return reduxFirstRouter.connectRoutes(history, ROUTES)
}

export default Router
