import h from 'react-hyperscript'

function DialogueCreator({ newDialogueTitle, onChangeNewDialogueTitle, onSubmitDialogue }) {
  return (
    h('div', [
      h('h1', 'Start a Dialogue'),
      h('form', [
        h('label', { for: 'hm-dialogue-title-input' }, 'Title'),
        h('input.u-full-width', {
            id: 'hm-dialogue-title-input',
            type: 'text',
            placeholder: 'Describe your dialogue here',
            onChange: (e) => onChangeNewDialogueTitle({ text: e.target.value }),
            value: newDialogueTitle
        }),
        h('button', { onClick: onSubmitDialogue }, 'Create Dialogue')
      ])
    ])
  )
}

export default DialogueCreator
