import h from 'react-hyperscript'

function StatementCreator({ draftStatement, onChangeDraftStatement, onSubmitStatement }) {
  return (
    h('form', [
      h('label', { htmlFor: 'hm-dialogue-statement-input' }, [
        'It\'s your turn to speak.'
      ]),
      h('textarea.u-full-width', {
        id: 'hm-dialogue-statement-input',
        placeholder: 'Compose your statement here',
        onChange: (e) => onChangeDraftStatement({ text: e.target.value }),
        value: draftStatement
      }),
      h('button', { onClick: onSubmitStatement }, 'Submit Statement')
    ])
  )
}

export default StatementCreator
