import _ from 'lodash/fp'

function SideEffectsMiddleware(handlers) {
  return (store) => {
    Object.values(handlers).forEach((handler) => handler.init && handler.init(store))
    return (next) => (action) => {
      Object.keys(handlers).forEach((handlerNamespace) => {
        let [actionNamespace, actionName] = action.type.split('/')
        if (handlerNamespace !== actionNamespace) { return }
        let fnName = `on${_.upperFirst(_.camelCase(actionName))}`
        let fn = handlers[handlerNamespace][fnName]
        if (!fn) { return }
        fn({ ...store, payload: action.payload })
      })
      return next(action)
    }
  }
}

export default SideEffectsMiddleware
