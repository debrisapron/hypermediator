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

function UserDropdown(onClickUserDropdown) {
  return (
    h(b.NavDropdown, { title: 'Not logged in', id: 'hm-user-dropdown' },
      h(b.NavItem, { onClick: onClickUserDropdown }, 'Login/Register')
    )
  )
}

function PageNav(onClickUserDropdown) {
  return (
    h(b.Navbar, [
      h('div', { className: 'container' }, [
        h(b.Navbar.Header, [
          h(b.Navbar.Brand, [
            h(Link, { to: '/' }, 'HYPERMEDIATOR')
          ])
        ]),
        h(b.Nav, { pullRight: true }, UserDropdown(onClickUserDropdown))
      ])
    ])
  )
}

function Page({ children, title, onClickUserDropdown }) {
  return h('span', [PageNav(onClickUserDropdown), PageContent(title, children)])
}

export default Page
