import * as React from 'react'
import * as reactRedux from 'react-redux'
import h from 'react-hyperscript'

// This function wraps a stateless component to produce a new component which calls a provided
// callback when the component is mounted or will receive props.
function Reactive(component, onNewProps) {
  return class extends React.Component {
    componentDidMount() {
      onNewProps(this.props)
    }
    componentWillReceiveProps(props) {
      onNewProps(props)
    }
    render() {
      return h(component, this.props)
    }
  }
}

function Container(component, { mapDispatch, mapState, onNewProps }) {
  if (onNewProps) {
    component = Reactive(component, onNewProps)
  }
  return reactRedux.connect(mapState, mapDispatch)(component)
}

export default Container
