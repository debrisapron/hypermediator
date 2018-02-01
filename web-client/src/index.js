import * as react from 'react'
import * as redux from 'redux'
import * as reactDom from 'react-dom'
import * as reactRouterRedux from 'react-router-redux'
import createHistory from 'history/createBrowserHistory'
import SideEffectsMiddleware from './side-effects'
import * as reducers from './reducers'
import Root from './components'

function createStore(history) {
  let routerMiddleware = reactRouterRedux.routerMiddleware(history)

  return redux.createStore(
    redux.combineReducers({
      ...reducers,
      router: reactRouterRedux.routerReducer
    }),
    redux.applyMiddleware(routerMiddleware, SideEffectsMiddleware)
  )
}

function main() {
  let history = createHistory()
  let store = createStore(history)
  let root = react.createElement(Root, { store, history })
  let el = document.getElementById('root')
  reactDom.render(root, el)
}

// START YOUR ENGINES
main()
