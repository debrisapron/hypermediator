import { connect } from 'react-redux'
import * as t from '../types'
import * as actions from '../store/actions'
import Dialogue from '../components/Dialogue'

let mapDispatchToProps = {
  updateDraftStatement: actions.updateDraftStatement,
  addStatement: actions.addStatement,
  fetchDialogue: actions.fetchDialogue,
  showLoginModal: actions.showLoginModal
}

function mapStateToProps(state: t.State, ownProps: any) {
  return {
    dialogue: state.dialogue,
    draftStatement: state.draftStatement,
    requestedDialogueId: ownProps.match.params.dialogueId
  }
}

// TODO Not very type-safe
let DialogueContainer = connect<{}, {}, t.State>(mapStateToProps, mapDispatchToProps)(Dialogue)

export default DialogueContainer
