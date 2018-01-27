import * as reactRedux from 'react-redux'
import * as actions from '../store/actions'
import Reactive from './Reactive'
import Dialogue from '../components/Dialogue'

let mapDispatchToProps = {
  onChangeDraftStatement: actions.updateDraftStatement,
  onSubmitStatement: actions.addStatement,
  onRenderDialogue: actions.fetchDialogue
}

function mapStateToProps(state, ownProps) {
  return {
    dialogue: state.dialogue,
    dialogueLoading: state.dialogueLoading,
    draftStatement: state.draftStatement,
    requestedDialogueId: ownProps.match.params.dialogueId
  }
}

function onNewProps({ dialogue, dialogueLoading, onRenderDialogue, requestedDialogueId }) {
  if (dialogueLoading) { return }
  if (!dialogue || dialogue.id !== requestedDialogueId) {
    onRenderDialogue(requestedDialogueId)
  }
}

let DialogueContainer = reactRedux.connect(mapStateToProps, mapDispatchToProps)(
  Reactive(Dialogue, onNewProps)
)

export default DialogueContainer
