import _ from 'lodash/fp'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import * as react from 'react'
import * as redux from 'redux'
import * as reactDom from 'react-dom'
import createHistory from 'history/createBrowserHistory'
import Root from './components'

enzyme.configure({ adapter: new Adapter() })

let INITIAL_STATE = {
  dialogue: {
    newDialogueTitle: '',
    isLoading: false,
    draftStatement: '',
    data: null
  },
  dialogueSummaries: {
    data: null
  },
  loggedInUser: {
    data: null
  }
}

let ALICE_INITIAL_STATE = {
  loggedInUser: {
    data: {
      id: 'alice',
      name: 'Alice'
    }
  }
}

function render(initialState) {
  let history = createHistory()
  let store = redux.createStore(
    (state, action) => state,
    _.merge(INITIAL_STATE, initialState)
  )
  let root = react.createElement(Root, { store, history })
  let wrapper = enzyme.mount(root)
  let $ = (selector) => {
    return wrapper
      .find(selector)
      .filterWhere((n) => typeof n.type() === 'string')
  }
  return { $, wrapper, store, history }
}

function renderAlice(initialState) {
  return render(_.merge(ALICE_INITIAL_STATE, initialState))
}

render.alice = renderAlice
global.render = render
