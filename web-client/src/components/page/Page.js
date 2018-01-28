import * as b from 'react-bootstrap'
import * as rr from 'react-router-dom'
import h from 'react-hyperscript'
import HomeContainer from './home'
import DialogueContainer from './dialogue'
import DialogueCreatorContainer from './dialogue/creator'

function PageContent() {
  return (
    h('div', { className: 'container' }, [
      h('main', [
        h(rr.Switch, [
          h(rr.Route, { exact: true, path: '/', component: HomeContainer }),
          h(rr.Route, { path: '/create-dialogue', component: DialogueCreatorContainer }),
          h(rr.Route, { path: '/d/:dialogueId', component: DialogueContainer })
        ])
      ])
    ])
  )
}

function UserDropdown(loggedInUser, onClickLogin, onClickLogout) {
  return loggedInUser.data
    ? h(b.NavDropdown, { title: loggedInUser.data.name, id: 'hm-user-dropdown' },
        h(b.NavItem, { onClick: onClickLogout }, 'Logout')
      )
    : h(b.NavDropdown, { title: 'Not logged in', id: 'hm-user-dropdown' },
        h(b.NavItem, { onClick: onClickLogin }, 'Login/Register')
      )
}

function PageNav(loggedInUser, onClickLogin, onClickLogout) {
  return (
    h(b.Navbar, [
      h('div', { className: 'container' }, [
        h(b.Navbar.Header, [
          h(b.Navbar.Brand, [
            // TODO CSS!
            h(rr.Link, { to: '/' }, [
              h('div', [
                h('img', { src: '/hm_logo.svg', height: 30 }),
                h('span', { style: { marginLeft: '10px' } }, 'HYPERMEDIATOR')])])])]),
        h(b.Nav, { pullRight: true }, [
          UserDropdown(loggedInUser, onClickLogin, onClickLogout),
          h('li', [h(rr.Link, { to: '/create-dialogue' }, 'Start a Dialogue')])
        ])
      ])
    ])
  )
}

function Page({ loggedInUser, onClickLogin, onClickLogout }) {
  return (
    h(rr.BrowserRouter, [
      h('span.page', [
        PageNav(loggedInUser, onClickLogin, onClickLogout),
        PageContent()
      ])
    ])
  )
}

export default Page
