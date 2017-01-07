let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let Register = () => {
  return (
    <DefaultLayout showAuth={ false }>
      <h1>Register</h1>
      <form action="" method="POST">
        Username:<br />
        <input name="username" type="text" /><br />
        Email:<br />
        <input name="email" type="text" /><br />
        <input type="submit" value="Register" />
      </form>
    </DefaultLayout>
  )
}

module.exports = Register