import * as reactRedux from 'react-redux'
import * as reactRouter from 'react-router-dom'
import h from 'react-hyperscript'
import ModalSwitcherContainer from '../containers/ModalSwitcherContainer'
import HomeContainer from '../containers/HomeContainer'
import DialogueContainer from '../containers/DialogueContainer'

function Root({ store }) {
  return (
    h(reactRedux.Provider, { store }, [
      h('span', [
        h(ModalSwitcherContainer),
        h(reactRouter.BrowserRouter, [
          h(reactRouter.Switch, [
            h(reactRouter.Route, { exact: true, path: '/', component: HomeContainer }),
            h(reactRouter.Route, { path: '/d/:dialogueId', component: DialogueContainer })
          ])
        ])
      ])
    ])
  )
}

export default Root
