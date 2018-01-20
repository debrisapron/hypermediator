import { createElement } from 'react'
import { render } from 'react-dom'
import store from './store'
import Root from './components/Root'

// START YOUR ENGINES
main()

function main() {
  render(
    createElement(Root, { store }),
    document.getElementById('root')
  )
}
