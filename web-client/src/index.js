import * as react from 'react'
import * as reactDom from 'react-dom'
import store from './store'
import Root from './components'

function main() {
  reactDom.render(react.createElement(Root, { store }), document.getElementById('root'))
}

// START YOUR ENGINES
main()
