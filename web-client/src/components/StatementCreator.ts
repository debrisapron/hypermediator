import * as t from '../types'
import h from 'react-hyperscript'

function StatementCreator({ draftStatement, updateDraftStatement, addStatement }: {
  draftStatement: string,
  updateDraftStatement: (text: string) => void,
  addStatement: () => void
}) {
  return (
    h('div', [
      h('input', { type: 'text', value: draftStatement, onChange: onChangeText }),
      h('button', { onClick: addStatement })
    ])
  )

  function onChangeText(e: t.HtmlInputElementEvent) {
    updateDraftStatement(e.target.value)
  }
}

export default StatementCreator
