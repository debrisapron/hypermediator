import * as actions from '../actions'
import * as actionTypes from '../actionTypes'
import * as auth from '../../services/auth'
import * as api from '../../services/api'

function onStartup(store) {
  let token = window.localStorage.getItem('userToken')
  let id = window.localStorage.getItem('userId')
  if (!(token && id)) { return }
  getUserFromCredentials(store, token, id)
}

async function onAuth0AuthenticateSuccess(store, accessToken) {
  let { token, id } = await api.authenticateUser(accessToken)
  window.localStorage.setItem('userToken', token)
  window.localStorage.setItem('userId', id)
  getUserFromCredentials(store, token, id)
}

async function getUserFromCredentials(store, token, id) {
  let loggedInUser = await api.fetchUser(id)
  loggedInUser.token = token
  store.dispatch(actions.authenticateSuccess({ loggedInUser }))
}

function AuthMiddleware(store) {
  onStartup(store)
  auth.onAuthenticated(({ accessToken }) => onAuth0AuthenticateSuccess(store, accessToken))
  return (next) => (action) => {
    switch (action.type) {
      case actionTypes.SHOW_LOGIN_MODAL:
        auth.showAuthForm()
        break
      default: // Do nothing
    }
    return next(action)
  }
}

export default AuthMiddleware
