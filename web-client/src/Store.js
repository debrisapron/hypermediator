import _ from 'lodash/fp'
import * as react from 'react'
import * as redux from 'redux'
import DEFAULT_INITIAL_STATE from './reducers/initialState'

let DEFAULT_REDUCERS = {}
Object.keys(DEFAULT_INITIAL_STATE).forEach((key) => {
  DEFAULT_REDUCERS[key] = (state = DEFAULT_INITIAL_STATE[key]) => state
})

let composeEnhancers = (
  typeof window === 'object' && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__
) || _.compose

function Store({ reducers, initialState, enhancers, middlewares }) {
  initialState = _.merge(DEFAULT_INITIAL_STATE, initialState)
  let reducer = redux.combineReducers(_.merge(DEFAULT_REDUCERS, reducers))
  enhancers = enhancers || []
  if (middlewares) {
    enhancers = enhancers.concat(redux.applyMiddleware(...(middlewares)))
  }
  let enhancer = enhancers.length ? composeEnhancers(...enhancers) : undefined
  return redux.createStore(reducer, initialState, enhancer)
}

export default Store
