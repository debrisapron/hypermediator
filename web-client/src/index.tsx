import * as React from 'react'
import * as ReactDom from 'react-dom'
import store from './store'
import Root from './components/Root'

function main() {
  ReactDom.render(React.createElement(Root, { store }), document.getElementById('root'))
}

// START YOUR ENGINES
main()
