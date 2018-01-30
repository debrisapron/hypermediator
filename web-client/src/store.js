import * as redux from 'redux'
import SideEffectsMiddleware from './side-effects'
import * as reducers from './reducers'
import history from './history'
import * as reactRouterRedux from 'react-router-redux'

let routerMiddleware = reactRouterRedux.routerMiddleware(history)

let store = redux.createStore(
  redux.combineReducers({
    ...reducers,
    router: reactRouterRedux.routerReducer
  }),
  redux.applyMiddleware(routerMiddleware, SideEffectsMiddleware)
)

export default store
