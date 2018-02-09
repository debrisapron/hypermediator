import _ from 'lodash/fp'
import * as react from 'react'
import * as reactDom from 'react-dom'
import createHistory from 'history/createBrowserHistory'

import * as authSideEffects from './side-effects/authSideEffects'
import * as dialogueSideEffects from './side-effects/dialogueSideEffects'
import * as dialogueSummarySideEffects from './side-effects/dialogueSummarySideEffects'
import SideEffectsMiddleware from './side-effects/SideEffectsMiddleware'

import appReducer from './reducers/appReducer'
import dialogueReducer from './reducers/dialogueReducer'
import dialogueSummariesReducer from './reducers/dialogueSummariesReducer'
import loggedInUserReducer from './reducers/loggedInUserReducer'

import Router from './Router'
import Store from './Store'
import Root from './components'

function createStore() {
  let history = createHistory()
  let {
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = Router(history)
  let sideEffectsMiddleware = SideEffectsMiddleware({
    AUTH: authSideEffects,
    DIALOGUE: dialogueSideEffects,
    DIALOGUE_SUMMARY: dialogueSummarySideEffects
  })
  return Store({
    reducers: {
      app: appReducer,
      dialogue: dialogueReducer,
      dialogueSummaries: dialogueSummariesReducer,
      location: routerReducer,
      loggedInUser: loggedInUserReducer
    },
    initialState: window.__HM_REDUX_INITIAL_STATE,
    enhancers: [
      routerEnhancer
    ],
    middlewares: [
      routerMiddleware,
      sideEffectsMiddleware
    ]
  })
}

function main() {
  let store = createStore()
  let root = react.createElement(Root, { store })
  let el = document.getElementById('root')
  reactDom.render(root, el)
}

// START YOUR ENGINES
main()
