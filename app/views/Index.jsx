let React = require('react')
let DefaultLayout = require('./layouts/DefaultLayout')

let Index = ({ context, hotDialogues }) => {
  return (
    <DefaultLayout context={ context }>
      <h1>Welcome to HYPERMEDIATOR</h1>
      <h2>A safe place to talk</h2>
      <h3>Hot Dialogues:</h3>
      <ul className="hm-hot-dialogue-list">
        { hotDialogues.map((hd) => <DialogueSummary key={ hd.id } dialogueSummary={ hd } />) }
      </ul>
    </DefaultLayout>
  )
}

let DialogueSummary = ({ dialogueSummary }) => {
  return (
    <li>
      <a href={ '/dialogues/' + dialogueSummary.id }>{ dialogueSummary.title }</a>
      &nbsp;<em>{ dialogueSummary.users[0].username } & { dialogueSummary.users[1].username }</em>
    </li>
  )
}

module.exports = Index