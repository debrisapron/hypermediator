let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let Dialogue = ({ dialogue, context }) => {
  return (
    <DefaultLayout context={ context }>
      <h1>{ dialogue.title }</h1>
      <h2>A dialogue between { dialogue.users[0].username } and { dialogue.users[1].username }</h2>
      { dialogue.statements.map((s) => <Statement statement={ s } key={ s.id } />) }
    </DefaultLayout>
  )
}

let Statement = ({ statement }) => {
  return (
    <div className="hm-st">
      <h3>{ statement.user.username }:</h3>
      <p>{ statement.text }</p>
    </div>
  )  
}

module.exports = Dialogue
