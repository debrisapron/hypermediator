// import Auth0Lock from 'auth0-lock'
// import redux from 'redux'
// // import actions from './actions'
// import * as t from '../../types'
// import * as api from '../../api'
//
// let AUTH0_CLIENT_ID = '7C9n9goUYNsnIQgNKpGzZZItal8SA8H5'
// let AUTH0_DOMAIN = 'hypermediator.auth0.com'
// let lock: Auth0LockStatic
//
// function showAuthForm() {
//   lock.show()
// }
//
// // I would rather use a function declaration here because that's what I use everywhere else, but I
// // don't know how to declare the type :(
// let auth: redux.Middleware = (api) => {
//   lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN)
//   lock.on('authenticated', (result: AuthResult) => {
//
//   })
//   return (next) => <A extends redux.Action>(action: A) => {
//     if (action.type === t.ActionType.LOGIN_MODAL_SHOW) { showAuthForm() }
//     return next(action)
//   }
// }
//
// export default auth
