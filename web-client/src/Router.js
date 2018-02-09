import * as history from 'history'
import * as reduxFirstRouter from 'redux-first-router'
import * as actions from './actions'
import * as actionTypes from './actions/actionTypes'

let ROUTES = {
  [actionTypes.LOCATION.HOME]: {
    path: '/',
    thunk: Thunk(actions.dialogueSummary.fetchAll)
  },
  [actionTypes.LOCATION.DIALOGUE]: {
    path: '/d/:dialogueId',
    thunk: Thunk(actions.dialogue.fetch)
  },
  [actionTypes.LOCATION.DIALOGUE_CREATOR]: {
    path: '/create-dialogue'
  }
}

function Thunk(action) {
  return async (dispatch, getState) => {
    dispatch(actions.app.setIsBusy({ isBusy: true }))
    let payload = getState().location.payload
    await dispatch(action(payload))
    dispatch(actions.app.setIsBusy({ isBusy: false }))
  }
}

function Router(isDom, historyConfig) {
  let createHistory = history[isDom ? 'createBrowserHistory' : 'createMemoryHistory']
  let historyInstance = createHistory(historyConfig)
  return reduxFirstRouter.connectRoutes(historyInstance, ROUTES)
}

export default Router
