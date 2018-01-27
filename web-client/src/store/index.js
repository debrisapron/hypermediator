import * as redux from 'redux'
import SideEffectsMiddleware from '../side-effects'
import rootReducer from './reducers'

let preloadedState = {
  activeModal: null,
  dialogue: null,
  dialogueLoading: false,
  dialogueSummaries: null,
  draftStatement: '',
  loggedInUser: null,
  userToken: null
}

let store = redux.createStore(
  rootReducer,
  preloadedState,
  redux.applyMiddleware(SideEffectsMiddleware)
)

export default store
