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
      requestedDialogueId: ownProps.match.params.dialogueId
    }
  },
  onNewProps({ dialogue, onRenderDialogue, requestedDialogueId }) {
    if (dialogue.isLoading) { return }
    if (!dialogue.data || dialogue.data.id !== requestedDialogueId) {
      onRenderDialogue({ id: requestedDialogueId })
    }
  }
})

export default DialogueContainer
