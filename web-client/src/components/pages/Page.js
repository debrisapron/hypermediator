import _ from 'lodash/fp'
import h from 'react-hyperscript'
import * as actionTypes from '../../actions/actionTypes'
import Link from 'redux-first-router-link'
import HomeContainer from './home/HomeContainer'
import DialogueContainer from './dialogue/DialogueContainer'
import DialogueCreatorContainer from './dialogue-creator/DialogueCreatorContainer'

function LocationComponent(location) {
  switch(location) {
    case actionTypes.LOCATION.HOME: return HomeContainer
    case actionTypes.LOCATION.DIALOGUE: return DialogueContainer
    case actionTypes.LOCATION.DIALOGUE_CREATOR: return DialogueCreatorContainer
    default: throw new Error('Unknown location')
  }
}

function PageContent(location) {
  return h('main.row', [h(LocationComponent(location))])
}

function Brand() {
  return (
    h(Link, { to: '/' }, [
      h('img', { src: '/hm_logo.svg', height: 30 }),
      h('span.hm-site-name', 'HYPERMEDIATOR')
    ])
  )
}

function PageNav(loggedInUser, onClickLogin, onClickLogout) {
  let user = _.get('data.name', loggedInUser)
  return (
    h('div.u-pull-right', [
      h(Link, { to: '/create-dialogue' }, 'Start a Dialogue'),
      ' | ',
      h('a', { onClick: user ? onClickLogout : onClickLogin }, [
        user || 'Not logged in'
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

function Page({ isBusy, location, loggedInUser, onClickLogin, onClickLogout }) {
  if (isBusy) {
    return h('div.loading', 'Loading…')
  }
  return (
    h('div.container', [
      PageHeader(loggedInUser, onClickLogin, onClickLogout),
      PageContent(location)
    ])
  )
}

export default Page
