import * as React from 'react'
import h from 'react-hyperscript'

// This function wraps a stateless component to produce a new component which calls a provided
// callback when the component is mounted or will receive props.
function withMount<P>(
  component: React.StatelessComponent<P>,
  onNewProps: (props: P) => void
): React.ComponentClass<P> {
  return class extends React.Component<P> {
    componentDidMount() {
      onNewProps(this.props)
    }
    componentWillReceiveProps(props: P) {
      onNewProps(props)
    }
    render() {
      return h(component, this.props)
    }
  }
}

export default withMount
