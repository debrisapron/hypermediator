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
      h('img', { src: '/hm_logo.svg', height: 25 }),
      h('span.hm-site-name', 'HYPERMEDIATOR')
    ])
  )
}

function UserLink(loggedInUser, onClickLogin, onClickLogout) {
  let user = loggedInUser && loggedInUser.data
  if (user) {
    return (
      h('a.u-pull-right', { onClick: onClickLogout }, [
        h('span.hm-user-name', user.name),
        h('img', { src: user.avatar, height: 25 })
      ])
    )
  }
  return h('a.u-pull-right', { onClick: onClickLogin }, 'Not logged in')
}

function CreateDialogueLink() {
  return h('div.hm-center-text', [
    h(Link, { to: '/create-dialogue' }, 'Start a Dialogue')
  ])
}

function PageHeader(loggedInUser, onClickLogin, onClickLogout) {
  return (
    h('header.row', [
      h('div.four.columns', [Brand()]),
      h('div.four.columns', [CreateDialogueLink()]),
      h('div.four.columns', [UserLink(loggedInUser, onClickLogin, onClickLogout)])
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
