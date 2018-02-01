import _ from 'lodash/fp'
import * as authSideEffects from './authSideEffects'
import * as dialogueSideEffects from './dialogueSideEffects'
import * as dialogueSummarySideEffects from './dialogueSummarySideEffects'

let DESTINATIONS = {
  AUTH: authSideEffects,
  DIALOGUE: dialogueSideEffects,
  DIALOGUE_SUMMARY: dialogueSummarySideEffects
}

function SideEffectsMiddleware(store) {
  Object.values(DESTINATIONS).forEach((dest) => dest.init && dest.init(store))
  return (next) => (action) => {
    console.log(action)
    Object.keys(DESTINATIONS).forEach((destKey) => {
      let [namespace, detail] = action.type.split('/')
      if (destKey !== namespace) { return }
      let fnName = `on${_.upperFirst(_.camelCase(detail))}`
      let fn = DESTINATIONS[destKey][fnName]
      if (!fn) { return }
      fn({ ...store, payload: action.payload })
    })
    return next(action)
  }
}

export default SideEffectsMiddleware
