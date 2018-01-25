import * as t from '../types'
import h from 'react-hyperscript'
import Page from './Page'
import StatementList from './StatementList'
import StatementCreator from './StatementCreator'

function Dialogue(props: t.DialogueProps) {
  if (!props.dialogue) {
    return h('p', 'Loading dialogue...')
  }

  let {
    dialogue: { title, statements },
    onClickUserDropdown, draftStatement, onChangeDraftStatement, onSubmitStatement
  } = props
  return (
    h(Page, { title, onClickUserDropdown }, [
      h(StatementList, { statements }),
      h(StatementCreator, { draftStatement, onChangeDraftStatement, onSubmitStatement })
    ])
  )
}

export default Dialogue
