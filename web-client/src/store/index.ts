import thunkMiddleware from 'redux-thunk'
import { createStore, applyMiddleware } from 'redux'
import * as t from '../types'
import rootReducer from './reducers'

let preloadedState: t.State = {
  activeModal: undefined,
  dialogue: undefined,
  dialogueSummaries: undefined,
  draftStatement: ''
}

let store: t.Store = createStore(rootReducer, preloadedState, applyMiddleware(thunkMiddleware))

export default store
