let _ = require('lodash/fp')
let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')
let showdown = require('showdown')

let mdConverter = new showdown.Converter()

let Dialogue = ({ dialogue, context }) => {
  let nextParticipant = leastRecentParticipant(dialogue)
  let showStatementInput = context.user && context.user.id === nextParticipant.id
  return (
    <DefaultLayout context={ context }>
      <h1>{ dialogue.title }</h1>
      <h2>
        A dialogue between { dialogue.users[0].username } and { dialogue.users[1].username }
      </h2>
      <ul className="hm-statement-list">
        { dialogue.statements.map((s) => <Statement statement={ s } key={ s.id } />) }
      </ul>
      {
        showStatementInput
          ? <StatementInput />
          : <DialogueStatus nextParticipant={ nextParticipant } />
      }
    </DefaultLayout>
  )
}

let Statement = ({ statement }) => {
  let html = mdConverter.makeHtml(statement.text)
  return (
    <li className="hm-statement">
      <h3>{ statement.user.username }:</h3>
      <div dangerouslySetInnerHTML={{ __html: html }}></div>
    </li>
  )  
}

let StatementInput = () => {
  return (
    <form action="" method="POST">
      <p>...</p>
      <h3>It's your turn! Add your statement:</h3>
      <textarea name="text" className="hm-statement-input" /><br />
      <input type="submit" value="Submit Statement" />
    </form>
  )
}

let DialogueStatus = ({ nextParticipant }) => {
  return <p><em>{ nextParticipant.username } is next to speak</em></p>
}

let leastRecentParticipant = (dialogue) => {
  let reversedParticipantIds = _.reverse(dialogue.statements)
    .map((s) => s.userId)
  let leastRecentParticipantId = _.last(_.uniq(reversedParticipantIds))
  return dialogue.users.find((u) => u.id === leastRecentParticipantId)
}

module.exports = Dialogue
