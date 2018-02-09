import _ from 'lodash/fp'
import fs from 'fs'
import path from 'path'
import * as react from 'react'
import * as reactDomServer from 'react-dom/server'
import createHistory from 'history/createMemoryHistory'

import * as dialogueSideEffects from '../web-client/src/side-effects/dialogueSideEffects'
import * as dialogueSummarySideEffects from '../web-client/src/side-effects/dialogueSummarySideEffects'
import SideEffectsMiddleware from '../web-client/src/side-effects/SideEffectsMiddleware'

import dialogueReducer from '../web-client/src/reducers/dialogueReducer'
import dialogueSummariesReducer from '../web-client/src/reducers/dialogueSummariesReducer'

import Router from '../web-client/src/Router'
import Store from '../web-client/src/Store'
import Root from '../web-client/src/components'

let htmlTemplate = fs.readFileSync(
  path.resolve(__dirname, './public/index.html'),
  'utf8'
)

// NOTE See
// https://github.com/ayroblu/ssr-create-react-app-v2/blob/master/server/universal.js
// and
// https://github.com/faceyspacey/redux-first-router/blob/master/docs/server-rendering.md
// for more info

async function createStore(url) {
  let history = createHistory({ initialEntries: [url] })
  let {
    thunk,
    reducer: routerReducer,
    middleware: routerMiddleware,
    enhancer: routerEnhancer
  } = Router(history)
  let sideEffectsMiddleware = SideEffectsMiddleware({
    DIALOGUE: dialogueSideEffects,
    DIALOGUE_SUMMARY: dialogueSummarySideEffects
  })
  let store = Store({
    reducers: {
      dialogue: dialogueReducer,
      dialogueSummaries: dialogueSummariesReducer,
      location: routerReducer
    },
    enhancers: [routerEnhancer],
    middlewares: [routerMiddleware, sideEffectsMiddleware]
  })
  await thunk(store)
  return store
}

async function renderPage(url) {
  let store = await createStore(url)
  let root = react.createElement(Root, { store })
  let rootHtml = reactDomServer.renderToString(root)
  let state = store.getState()
  let stateScript = `window.__HM_REDUX_INITIAL_STATE = ${JSON.stringify(state)}`
  return htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${rootHtml}</div><script>${stateScript}</script>`
  )
}

export default renderPage
