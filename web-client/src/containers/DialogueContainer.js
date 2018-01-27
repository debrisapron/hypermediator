import * as actions from '../store/actions'
import Container from './Container'
import Dialogue from '../components/Dialogue'

let DialogueContainer = Container(Dialogue, {
  mapDispatch: {
    onChangeDraftStatement: actions.dialogue.updateDraftStatement,
    onSubmitStatement: actions.dialogue.addStatement,
    onRenderDialogue: actions.dialogue.fetch
  },
  mapState(state, ownProps) {
    return {
      dialogue: state.dialogue,
      dialogueLoading: state.dialogueLoading,
      draftStatement: state.draftStatement,
      requestedDialogueId: ownProps.match.params.dialogueId
    }
  },
  onNewProps({ dialogue, dialogueLoading, onRenderDialogue, requestedDialogueId }) {
    if (dialogueLoading) { return }
    if (!dialogue || dialogue.id !== requestedDialogueId) {
      onRenderDialogue({ id: requestedDialogueId })
    }
  }
})

export default DialogueContainer
