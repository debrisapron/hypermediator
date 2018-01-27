import Auth0Lock from 'auth0-lock'

let AUTH0_DOMAIN = 'hypermediator.auth0.com'
let AUTH0_CLIENT_ID = 'GnHwkP2xAOdzmHV8zmiM0GhLiB30uJ61'
let AUTH0_API_IDENTIFIER = 'http://localhost:8080'

let lock = new Auth0Lock(AUTH0_CLIENT_ID, AUTH0_DOMAIN, {
  allowedConnections: ['Username-Password-Authentication'],
  auth: {
    audience: AUTH0_API_IDENTIFIER,
    responseType: 'token',
    redirectUrl: 'http://localhost:3000'
  }
})

export let show = lock.show.bind(lock)
export let logout = lock.logout.bind(lock)

export function onAuthenticated(callback) {
  lock.on('authenticated', callback)
}
