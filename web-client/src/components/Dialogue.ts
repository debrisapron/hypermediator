import * as t from '../types'
import h from 'react-hyperscript'
import Page from './Page'
import StatementList from './StatementList'
import StatementCreator from './StatementCreator'

function Dialogue({
  dialogue,
  draftStatement,
  requestedDialogueId,
  fetchDialogue,
  updateDraftStatement,
  addStatement
}: {
  dialogue?: t.Dialogue
  draftStatement: string
  requestedDialogueId: string
  fetchDialogue: (id: string) => void
  updateDraftStatement: (text: string) => void
  addStatement: () => void
}) {
  if (!(dialogue && dialogue.id === requestedDialogueId)) { fetchDialogue(requestedDialogueId) }
  return dialogue ?
    h(Page, { title: dialogue.title }, [
      h(StatementList, { statements: dialogue.statements }),
      h(StatementCreator, { draftStatement, updateDraftStatement, addStatement })
    ]) :
    h('p', 'Loading dialogue...')
}

export default Dialogue
