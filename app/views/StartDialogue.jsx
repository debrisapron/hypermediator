let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let StartDialogue = ({ context }) => {
  return (
    <DefaultLayout context={ context }>
      <h1>Start Dialogue</h1>
      <form action="" method="POST">
        Dialogue Title:<br />
        <input name="title" type="text" /><br />
        Invite:<br />
        <input name="invitedUsername" type="text" /><br />
        Opening Statement:<br />
        <textarea name="openingStatementText" className="hm-st-txt" /><br />
        <input type="submit" value="Start Dialogue" />
      </form>
    </DefaultLayout>
  )
}

module.exports = StartDialogue