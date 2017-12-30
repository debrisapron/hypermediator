let React = require('react')

let STYLES = `
.hm-hot-dialogue-list, .hm-statement-list {
  list-style-type: none;
  padding: 0;
}
.hm-hot-dialogue-list li {
  padding-top: 5px;
}
textarea.hm-statement-input {
  width: 100%;
  height: 10em;
}
.header .pure-menu-list {
  float: right;
}`

let LIVERELOAD_SCRIPT = `
document.write(
  '<script src="http://' +
  (location.host || 'localhost').split(':')[0] +
  ':8082/livereload.js?snipver=1"></' +
  'script>'
)`

let DefaultLayout = ({ children, showAuth = true, context }) => {
  return (
    <html>
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
        <title>HYPERMEDIATOR</title>
        <link rel="stylesheet" href="https://unpkg.com/purecss@0.6.1/build/pure-min.css"></link>
        <style dangerouslySetInnerHTML={{ __html: STYLES }}></style>
      </head>
      <body>
        <div className="pure-g">
          <div className="pure-u-1-6"></div>
          <div className="pure-u-2-3">
            <div className="pure-menu pure-menu-horizontal header">
              <a href="/" className="pure-menu-heading pure-menu-link">HYPERMEDIATOR</a>
              { showAuth && <AuthMenu context={ context } /> }
            </div>
            { children }
          </div>
          <div className="pure-u-1-6"></div>
        </div>
        <script dangerouslySetInnerHTML={{ __html: LIVERELOAD_SCRIPT }}></script>
      </body>
    </html>
  )
}

let AuthMenu = ({ context }) => {
  return context.user
    ? <LoggedInMenu currentUser={ context.user } />
    : <LoggedOutMenu />
}

let LoggedInMenu = ({ currentUser }) => {
  return (
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><a href={ `/dialogues/new` } className="pure-menu-link">start a dialogue</a></li>
      <li className="pure-menu-item"><a href={ `/users/${ currentUser.id }` } className="pure-menu-link">logged in as { currentUser.username }</a></li>
      <li className="pure-menu-item"><a href="/logout" className="pure-menu-link">logout</a></li>
    </ul>
  )
}

let LoggedOutMenu = () => {
  return (
    <ul className="pure-menu-list">
      <li className="pure-menu-item"><a href="/login" className="pure-menu-link">login</a></li>
      <li className="pure-menu-item"><a href="/register" className="pure-menu-link">register</a></li>
    </ul>
  )
}

module.exports = DefaultLayout