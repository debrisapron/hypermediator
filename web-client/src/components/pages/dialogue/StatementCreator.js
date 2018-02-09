import h from 'react-hyperscript'

function StatementCreator({ draftStatement, onChangeDraftStatement, onSubmitStatement }) {
  return (
    h('div', [
      h('input', { type: 'text', value: draftStatement, onChange: onChangeText }),
      h('button', { onClick: onSubmitStatement })
    ])
  )

  function onChangeText(e) {
    onChangeDraftStatement(e.target.value)
  }
}

export default StatementCreator
