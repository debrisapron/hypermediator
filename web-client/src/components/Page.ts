import { Nav, Navbar, NavDropdown, NavItem, PageHeader } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import h from 'react-hyperscript'

function Page(props: {
  children: any[],
  title: string,
  onClickUserDropdown: () => void
}) {
  return h('span', [PageNav(), PageContent()])

  function UserDropdown() {
    return (
      h(NavDropdown, { title: 'Not logged in', id: 'hm-user-dropdown' },
        h(NavItem, { onClick: props.onClickUserDropdown }, 'Login/Register')
      )
    )
  }

  function PageNav() {
    return (
      h(Navbar, [
        h('div', { className: 'container' }, [
          h(Navbar.Header, [
            h(Navbar.Brand, [
              h(Link, { to: '/' }, 'HYPERMEDIATOR')
            ])
          ]),
          h(Nav, { pullRight: true }, UserDropdown())
        ])
      ])
    )
  }

  function PageContent() {
    return (
      h('div', { className: 'container' }, [
        h('main', [h(PageHeader, props.title)].concat(props.children))
      ])
    )
  }
}

export default Page
