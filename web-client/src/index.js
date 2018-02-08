import * as reactDom from 'react-dom'
import * as reactRouterRedux from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'

import * as authSideEffects from './side-effects/authSideEffects'
import * as dialogueSideEffects from './side-effects/dialogueSideEffects'
import * as dialogueSummarySideEffects from './side-effects/dialogueSummarySideEffects'
import SideEffectsMiddleware from './side-effects/SideEffectsMiddleware'

import appReducer from './reducers/appReducer'
import dialogueReducer from './reducers/dialogueReducer'
import dialogueSummariesReducer from './reducers/dialogueSummariesReducer'
import loggedInUserReducer from './reducers/loggedInUserReducer'

import init from './init'

function main() {
  let history = createHistory()
  let routerMiddleware = reactRouterRedux.routerMiddleware(history)
  let sideEffectsMiddleware = SideEffectsMiddleware({
    AUTH: authSideEffects,
    DIALOGUE: dialogueSideEffects,
    DIALOGUE_SUMMARY: dialogueSummarySideEffects
  })

  let config = {
    store: {
      reducers: {
        app: appReducer,
        dialogue: dialogueReducer,
        dialogueSummaries: dialogueSummariesReducer,
        loggedInUser: loggedInUserReducer,
        router: reactRouterRedux.routerReducer
      },
      initialState: window.__HM_REDUX_INITIAL_STATE,
      middlewares: [
        routerMiddleware,
        sideEffectsMiddleware
      ]
    },
    router: {
      component: reactRouterRedux.ConnectedRouter,
      props: { history }
    }
  }

  let root = init(config)
  let el = document.getElementById('root')
  reactDom.render(root, el)
}

// START YOUR ENGINES
main()
