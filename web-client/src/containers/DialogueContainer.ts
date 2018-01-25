import { connect } from 'react-redux'
import * as t from '../types'
import * as actions from '../store/actions'
import reactive from './reactive'
import Dialogue from '../components/Dialogue'

let mapDispatchToProps = {
  onChangeDraftStatement: actions.updateDraftStatement,
  onSubmitStatement: actions.addStatement,
  onRenderDialogue: actions.fetchDialogue,
  onClickUserDropdown: actions.showLoginModal
}

function mapStateToProps(state: t.State, ownProps: any) {
  return {
    dialogue: state.dialogue,
    dialogueLoading: state.dialogueLoading,
    draftStatement: state.draftStatement,
    requestedDialogueId: ownProps.match.params.dialogueId
  }
}

function onNewProps(props: t.DialogueProps) {
  if (props.dialogueLoading) { return }
  if (!props.dialogue || props.dialogue.id !== props.requestedDialogueId) {
    props.onRenderDialogue(props.requestedDialogueId)
  }
}

// TODO Not very type-safe
let DialogueContainer = connect<{}, {}, t.State>(
  mapStateToProps, mapDispatchToProps
)(reactive<t.DialogueProps>(Dialogue, onNewProps))

export default DialogueContainer
