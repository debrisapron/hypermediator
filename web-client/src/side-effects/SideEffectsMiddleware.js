import _ from 'lodash/fp'

function handle(handlers, store, action) {
  let [actionNamespace, actionName] = action.type.split('/')
  let handler = handlers[actionNamespace]
  if (!handler) { return }
  let fnName = `on${_.upperFirst(_.camelCase(actionName))}`
  let fn = handler[fnName]
  if (!fn) { return }
  return fn({ ...store, payload: action.payload })
}

function SideEffectsMiddleware(handlers) {
  return (store) => {
    Object.values(handlers).forEach((handler) => handler.init && handler.init(store))
    return (next) => (action) => {
      let thisRetVal = handle(handlers, store, action)
      let nextRetVal = next(action)
      return thisRetVal || nextRetVal
    }
  }
}

export default SideEffectsMiddleware
