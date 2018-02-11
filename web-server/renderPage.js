import fs from 'fs'
import path from 'path'
import * as react from 'react'
import * as reactDomServer from 'react-dom/server'

import Store from 'hypermediator/Store'
import Root from 'hypermediator/components'

let PUBLIC = './node_modules/hypermediator/web-client/build'

let htmlTemplate = fs.readFileSync(
  path.resolve(__dirname, `${PUBLIC}/index.html`),
  'utf8'
)

// NOTE See
// https://github.com/ayroblu/ssr-create-react-app-v2/blob/master/server/universal.js
// and
// https://github.com/faceyspacey/redux-first-router/blob/master/docs/server-rendering.md
// for more info

async function renderPage(url) {
  let store = await Store({
    awaitReady: true,
    isDom: false,
    routerConfig: { initialEntries: [url] }
  })
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
