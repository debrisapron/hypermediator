import * as redux from 'redux'
import * as t from '../types'
// import authMiddleware from './middlewares/auth'
import ApiMiddleware from './middlewares/ApiMiddleware'
import rootReducer from './reducers'

let preloadedState: t.State = {
  activeModal: undefined,
  dialogue: undefined,
  dialogueLoading: false,
  dialogueSummaries: undefined,
  draftStatement: ''
}

let store: t.Store = redux.createStore(
  rootReducer,
  preloadedState,
  redux.applyMiddleware(ApiMiddleware)
)

export default store
