import _ from 'lodash/fp'
import * as rr from 'react-router-dom'
import h from 'react-hyperscript'
import HomeContainer from './home'
import DialogueContainer from './dialogue'
import DialogueCreatorContainer from './dialogue/creator'

function PageContent() {
  return (
    h('main.row', [
      h(rr.Switch, [
        h(rr.Route, { exact: true, path: '/', component: HomeContainer }),
        h(rr.Route, { path: '/create-dialogue', component: DialogueCreatorContainer }),
        h(rr.Route, { path: '/d/:dialogueId', component: DialogueContainer })
      ])
    ])
  )
}

function Brand() {
  return (
    h(rr.Link, { to: '/' }, [
      h('img', { src: '/hm_logo.svg', height: 30 }),
      h('span.hm-site-name', 'HYPERMEDIATOR')
    ])
  )
}

function PageNav(loggedInUser, onClickLogin, onClickLogout) {
  let user = _.get('data.name', loggedInUser)
  return (
    h('div.u-pull-right', [
      h(rr.Link, { to: '/create-dialogue' }, 'Start a Dialogue'),
      ' | ',
      h('a', { onClick: user ? onClickLogout : onClickLogin }, [
        user ? user.name : 'Not logged in'
      ])
    ])
  )
}

function PageHeader(loggedInUser, onClickLogin, onClickLogout) {
  return (
    h('header.row', [
      h('div.six.columns', [Brand()]),
      h('div.six.columns', [PageNav(loggedInUser, onClickLogin, onClickLogout)])
    ])
  )
}

function Page({ config, loggedInUser, onClickLogin, onClickLogout }) {
  let { props, component: Router } = config.router
  return (
    h(Router, props, [
      h('div.container', [
        PageHeader(loggedInUser, onClickLogin, onClickLogout),
        PageContent()
      ])
    ])
  )
}

export default Page
