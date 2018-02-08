import _ from 'lodash/fp'
import fs from 'fs'
import path from 'path'
import * as reactDomServer from 'react-dom/server'
import * as reactRouterDom from 'react-router-dom'
import DEFAULT_INITIAL_STATE from '../web-client/src/reducers/initialState'
import init from '../web-client/src/init'

let htmlTemplate = fs.readFileSync(
  path.resolve(__dirname, './public/index.html'),
  'utf8'
)

// NOTE See
// https://github.com/ayroblu/ssr-create-react-app-v2/blob/master/server/universal.js
// for more detail

function renderStateScript(state) {
  return `window.__HM_REDUX_INITIAL_STATE = ${JSON.stringify(state)}`
}

function renderRootComponent(url, state) {
  let config = {
    store: {
      initialState: _.merge(DEFAULT_INITIAL_STATE, state)
    },
    router: {
      component: reactRouterDom.StaticRouter,
      props: { location: url, context: {} }
    }
  }
  let root = init(config)
  return reactDomServer.renderToString(root)
}

function renderPage(url, state) {
  let rootHtml = renderRootComponent(url, state)
  let stateScript = renderStateScript(state)
  return htmlTemplate.replace(
    '<div id="root"></div>',
    `<div id="root">${rootHtml}</div><script>${stateScript}</script>`
  )
}

export default renderPage
