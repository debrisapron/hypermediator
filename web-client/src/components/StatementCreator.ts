import * as t from '../types'
import h from 'react-hyperscript'

function StatementCreator(props: {
  draftStatement: string,
  onChangeDraftStatement: (text: string) => void,
  onSubmitStatement: () => void
}) {
  return (
    h('div', [
      h('input', { type: 'text', value: props.draftStatement, onChange: onChangeText }),
      h('button', { onClick: props.onSubmitStatement })
    ])
  )

  function onChangeText(e: t.HtmlInputElementEvent) {
    props.onChangeDraftStatement(e.target.value)
  }
}

export default StatementCreator
