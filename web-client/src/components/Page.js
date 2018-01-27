import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'
import h from 'react-hyperscript'

function PageContent(title, children) {
  return (
    h('div', { className: 'container' }, [
      h('main', [h(b.PageHeader, title)].concat(children))
    ])
  )
}

function UserDropdown(loggedInUser, onClickLogin, onClickLogout) {
  return loggedInUser
    ? h(b.NavDropdown, { title: loggedInUser.name, id: 'hm-user-dropdown' },
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
            h(Link, { to: '/', style: { paddingTop: '12px' } }, [
              h('div', [
                h('img', { src: '/hm_logo.svg', height: 30 }),
                h('span', { style: { marginLeft: '10px' } }, 'HYPERMEDIATOR')
              ])
            ])
          ])
        ]),
        h(b.Nav, { pullRight: true }, UserDropdown(loggedInUser, onClickLogin, onClickLogout))
      ])
    ])
  )
}

function Page({ children, loggedInUser, title, onClickLogin, onClickLogout }) {
  return (
    h('span', [
      PageNav(loggedInUser, onClickLogin, onClickLogout),
      PageContent(title, children)
    ])
  )
}

export default Page
