import _ from 'lodash/fp'
import * as actionTypes from './actionTypes'

// Generate an action creator for every action type.
// Action type `DO_THING` becomes action creator `doThing()`.
let actions = {}
Object.keys(actionTypes).forEach((type) => {
  actions[_.camelCase(type)] = (payload) => ({ type, payload })
})

export default actions
