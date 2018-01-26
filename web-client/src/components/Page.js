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

function UserDropdown(loggedInUser, onClickUserDropdown) {
  return loggedInUser
    ? h(b.NavDropdown, { title: loggedInUser.name, id: 'hm-user-dropdown' },
        h(b.NavItem, { onClick: onClickUserDropdown }, 'Logout')
      )
    : h(b.NavDropdown, { title: 'Not logged in', id: 'hm-user-dropdown' },
        h(b.NavItem, { onClick: onClickUserDropdown }, 'Login/Register')
      )
}

function PageNav(loggedInUser, onClickUserDropdown) {
  return (
    h(b.Navbar, [
      h('div', { className: 'container' }, [
        h(b.Navbar.Header, [
          h(b.Navbar.Brand, [
            h(Link, { to: '/' }, 'HYPERMEDIATOR')
          ])
        ]),
        h(b.Nav, { pullRight: true }, UserDropdown(loggedInUser, onClickUserDropdown))
      ])
    ])
  )
}

function Page({ children, loggedInUser, title, onClickUserDropdown }) {
  return h('span', [PageNav(loggedInUser, onClickUserDropdown), PageContent(title, children)])
}

export default Page
