import { Provider } from 'react-redux'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import * as t from '../types'
import h from 'react-hyperscript'
import ModalSwitcherContainer from '../containers/ModalSwitcherContainer'
import HomeContainer from '../containers/HomeContainer'
import DialogueContainer from '../containers/DialogueContainer'

function Root({ store }: { store: t.Store }) {
  return (
    h(Provider, { store }, [
      h('span', [
        h(ModalSwitcherContainer),
        h(Router, [
          h(Switch, [
            h(Route, { exact: true, path: '/', component: HomeContainer }),
            h(Route, { path: '/d/:dialogueId', component: DialogueContainer })
          ])
        ])
      ])
    ])
  )
}

export default Root
