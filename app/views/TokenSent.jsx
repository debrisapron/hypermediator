let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let TokenSent = ({ tokenUrl }) => {
  return (
    <DefaultLayout showAuth={ false }>
      <h1>Token sent</h1>
      <p>Please check your inbox and click on the link provided</p>
      <p><a href={ tokenUrl }>LINK</a></p>
    </DefaultLayout>
  )
}

module.exports = TokenSent