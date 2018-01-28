import h from 'react-hyperscript'
import * as b from 'react-bootstrap'

function DialogueCreator({ onSubmitDialogue }) {
  return (
    h('div', [
      h(b.PageHeader, 'Start a Dialogue'),
      h('form', [
        h(b.FormGroup, [
          h(b.ControlLabel, 'Title'),
          h(b.FormControl, { type: 'text', placeholder: 'Describe your dialogue here' }),
          h(b.Button, { onClick: onSubmitDialogue }, 'Create Dialogue')
        ])
      ])
    ])
  )
}

export default DialogueCreator
