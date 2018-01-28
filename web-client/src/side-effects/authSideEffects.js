import * as actions from '../store/actions'
import * as auth from '../services/auth'
import * as api from '../services/api'

async function onAuth0AuthenticateSuccess(dispatch, accessToken) {
  let { token, id } = await api.authenticateUser(accessToken)
  window.localStorage.setItem('userToken', token)
  window.localStorage.setItem('userId', id)
  getUserFromCredentials(dispatch, token, id)
}

async function getUserFromCredentials(dispatch, token, id) {
  let loggedInUser = await api.fetchUser(id)
  if (!loggedInUser) {
    clearStoredCredentials()
    return
  }
  loggedInUser.token = token
  dispatch(actions.auth.loginSuccess({ data: loggedInUser }))
}

function clearStoredCredentials() {
  window.localStorage.setItem('userToken', null)
  window.localStorage.setItem('userId', null)
}

export function init({ dispatch }) {
  auth.onAuthenticated(({ accessToken }) => onAuth0AuthenticateSuccess(dispatch, accessToken))
  let token = window.localStorage.getItem('userToken')
  let id = window.localStorage.getItem('userId')
  if (!(token && id)) { return }
  getUserFromCredentials(dispatch, token, id)
}

export function onLogout() {
  clearStoredCredentials()
  auth.logout()
}

export function onShowLoginModal() {
  auth.show()
}
