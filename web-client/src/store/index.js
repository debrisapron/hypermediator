import * as redux from 'redux'
import ApiMiddleware from './middlewares/ApiMiddleware'
import AuthMiddleware from './middlewares/AuthMiddleware'
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
  redux.applyMiddleware(ApiMiddleware, AuthMiddleware)
)

export default store
