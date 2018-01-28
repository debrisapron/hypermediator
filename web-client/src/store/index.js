import * as redux from 'redux'
import SideEffectsMiddleware from '../side-effects'
import rootReducer from './reducers'

let preloadedState = {
  app: {
    activeModal: null
  },
  dialogue: {
    isLoading: false,
    draftStatement: '',
    data: null
  },
  dialogueSummaries: {
    data: null,
  },
  loggedInUser: {
    data: null
  }
}

let store = redux.createStore(
  rootReducer,
  preloadedState,
  redux.applyMiddleware(SideEffectsMiddleware)
)

export default store
