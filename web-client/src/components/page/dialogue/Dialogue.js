import h from 'react-hyperscript'
import * as b from 'react-bootstrap'
import StatementList from './StatementList'
import StatementCreator from './StatementCreator'

function Dialogue({ dialogue, onChangeDraftStatement, onSubmitStatement }) {
  if (!dialogue.data) {
    return h('p', 'Loading dialogue...')
  }
  let { draftStatement, data: { title, statements } } = dialogue
  return (
    h('div', [
      h(b.PageHeader, title),
      h(StatementList, { statements }),
      h(StatementCreator, { draftStatement, onChangeDraftStatement, onSubmitStatement })
    ])
  )
}

export default Dialogue
