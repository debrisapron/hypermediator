import * as redux from 'redux'
// import authMiddleware from './middlewares/auth'
import ApiMiddleware from './middlewares/ApiMiddleware'
import rootReducer from './reducers'

let preloadedState = {
  activeModal: undefined,
  dialogue: undefined,
  dialogueLoading: false,
  dialogueSummaries: undefined,
  draftStatement: ''
}

let store = redux.createStore(
  rootReducer,
  preloadedState,
  redux.applyMiddleware(ApiMiddleware)
)

export default store
