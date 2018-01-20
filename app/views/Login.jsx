let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let Login = () => {
  return (
    <DefaultLayout showAuth={ false }>
      <h1>Login</h1>
      <form action="" method="POST">
        Email:<br />
        <input name="email" type="text" /><br />
        <input type="submit" value="Login" />
      </form>
    </DefaultLayout>
  )
}

module.exports = Login