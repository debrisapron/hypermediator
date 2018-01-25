import h from 'react-hyperscript'
import Page from './Page'
import StatementList from './StatementList'
import StatementCreator from './StatementCreator'

function Dialogue(
  { dialogue, onClickUserDropdown, draftStatement, onChangeDraftStatement, onSubmitStatement }
) {
  if (!dialogue) {
    return h('p', 'Loading dialogue...')
  }
  let { title, statements } = dialogue
  return (
    h(Page, { title, onClickUserDropdown }, [
      h(StatementList, { statements }),
      h(StatementCreator, { draftStatement, onChangeDraftStatement, onSubmitStatement })
    ])
  )
}

export default Dialogue
