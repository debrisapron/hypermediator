import h from 'react-hyperscript'
import StatementList from './StatementList'
import StatementCreator from './StatementCreator'

function Dialogue({ dialogue, onChangeDraftStatement, onSubmitStatement }) {
  if (!dialogue.data) {
    return h('p', 'Loading dialogue...')
  }
  let { draftStatement, data: { title, statements } } = dialogue
  return (
    h('div.hm-dialogue', [
      h('h1', title),
      h('hr'),
      h(StatementList, { statements }),
      h(StatementCreator, { draftStatement, onChangeDraftStatement, onSubmitStatement })
    ])
  )
}

export default Dialogue
