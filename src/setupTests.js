// import _ from 'lodash/fp'
import * as enzyme from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import 'jest-enzyme'
import * as react from 'react'
// import * as redux from 'redux'
import * as reactDom from 'react-dom'
// import createHistory from 'history/createMemoryHistory'
import Store from './Store'
import Root from './components'
enzyme.configure({ adapter: new Adapter() })

global.fetch = () => {}

jest.mock('./services/api')
jest.mock('./services/auth')

// let INITIAL_STATE = {
//   dialogue: {
//     newDialogueTitle: '',
//     isLoading: false,
//     draftStatement: '',
//     data: null
//   },
//   dialogueSummaries: {
//     data: null
//   },
//   loggedInUser: {
//     data: null
//   }
// }

// let ALICE_INITIAL_STATE = {
//   loggedInUser: {
//     data: {
//       id: 'alice',
//       name: 'Alice'
//     }
//   }
// }

function seedMockApi(data) {
  global.__fixtures = data ? _.merge(global.__fixtures, data) : {
    dialogueSummaries: [],
    users: {
      'alice': { id: 'alice', name: 'Alice' }
    }
  }
}

function seedLocalStorage(keys) {
  window.localStorage = {
    getItem: (key) => keys[key],
    setItem: () => {}
  }
}

async function render({ url = '/', user } = {}) {
  // let history = createHistory()
  // let store = redux.createStore(
  //   (state, action) => state,
  //   _.merge(INITIAL_STATE, initialState)
  // )
  seedMockApi()
  seedLocalStorage(user ? { userId: user, userToken: 'TEST_TOKEN' } : {})
  let store = await Store({
    awaitReady: true,
    useReduxDevtools: false,
    routerConfig: {
      isBrowser: false,
      historyConfig: { initialEntries: [url] }
    }
  })
  let root = react.createElement(Root, { store })
  let wrapper = enzyme.mount(root)
  let $ = (selector) => {
    return wrapper
      .find(selector)
      .filterWhere((n) => typeof n.type() === 'string')
  }
  return { $, wrapper, store }
}

// function renderAlice(initialState) {
//   return render(_.merge(ALICE_INITIAL_STATE, initialState))
// }

// render.alice = renderAlice
global.render = render
