import _ from 'lodash/fp'
import * as redux from 'redux'

import * as authSideEffects from './side-effects/authSideEffects'
import * as dialogueSideEffects from './side-effects/dialogueSideEffects'
import * as dialogueSummarySideEffects from './side-effects/dialogueSummarySideEffects'
import SideEffectsMiddleware from './side-effects/SideEffectsMiddleware'

import appReducer from './reducers/appReducer'
import dialogueReducer from './reducers/dialogueReducer'
import dialogueSummariesReducer from './reducers/dialogueSummariesReducer'
import loggedInUserReducer from './reducers/loggedInUserReducer'

import Router from './Router'

function Store({ isDom, initialState, routerConfig, awaitReady = false }) {
  let composeEnhancers =
    (isDom && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__) || _.compose
  let {
    thunk,
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = Router(isDom, routerConfig)
  let sideEffectsHandlers = {
    DIALOGUE: dialogueSideEffects,
    DIALOGUE_SUMMARY: dialogueSummarySideEffects
  }
  // Auth is client-side only
  if (isDom) {
    sideEffectsHandlers.AUTH = authSideEffects
  }
  let sideEffectsMiddleware = SideEffectsMiddleware(sideEffectsHandlers)
  let reducer = redux.combineReducers({
    app: appReducer,
    dialogue: dialogueReducer,
    dialogueSummaries: dialogueSummariesReducer,
    location: routerReducer,
    loggedInUser: loggedInUserReducer
  })
  let enhancer = composeEnhancers(
    routerEnhancer,
    redux.applyMiddleware(routerMiddleware, sideEffectsMiddleware)
  )
  let store = redux.createStore(reducer, initialState, enhancer)
  if (awaitReady) { return thunk(store).then(() => store) }
  return store
}

export default Store
