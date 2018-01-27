import * as reactRedux from 'react-redux'
import Reactive from './Reactive'

function Container(component, { mapDispatch, mapState, onNewProps }) {
  if (onNewProps) {
    component = Reactive(component, onNewProps)
  }
  return reactRedux.connect(mapState, mapDispatch)(component)
}

export default Container
