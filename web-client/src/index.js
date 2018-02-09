// NOTE This file is used *only* in the web client, not for SSR

import * as react from 'react'
import * as reactDom from 'react-dom'

import Store from './Store'
import Root from './components'

function main() {
  let store = Store({
    isDom: true,
    initialState: window.__HM_REDUX_INITIAL_STATE
  })
  let root = react.createElement(Root, { store })
  let el = document.getElementById('root')
  reactDom.hydrate(root, el)
}

// START YOUR ENGINES
main()
