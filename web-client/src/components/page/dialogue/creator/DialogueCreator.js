import h from 'react-hyperscript'
import * as b from 'react-bootstrap'

function DialogueCreator({ newDialogueTitle, onChangeNewDialogueTitle, onSubmitDialogue }) {
  return (
    h('div', [
      h(b.PageHeader, 'Start a Dialogue'),
      h('form', [
        h(b.FormGroup, [
          h(b.ControlLabel, 'Title'),
          h(b.FormControl, {
            type: 'text',
            placeholder: 'Describe your dialogue here',
            onChange: (e) => onChangeNewDialogueTitle({ text: e.target.value }),
            value: newDialogueTitle
          }),
          h(b.Button, { onClick: onSubmitDialogue }, 'Create Dialogue')
        ])
      ])
    ])
  )
}

export default DialogueCreator
