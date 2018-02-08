import * as react from 'react'
import * as redux from 'redux'
import Root from './components'

function Store({ reducers, initialState, middlewares }) {
  let reducer = reducers ? redux.combineReducers(reducers) : (state) => state
  let enhancer = middlewares && redux.applyMiddleware(...(middlewares))
  return redux.createStore(reducer, initialState, enhancer)
}

function init(config) {
  let store = Store(config.store)
  return react.createElement(Root, { store, config })
}

export default init
