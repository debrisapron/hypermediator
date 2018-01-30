import * as actions from '../../../../actions'
import Container from '../../../Container'
import DialogueCreator from './DialogueCreator'

let DialogueCreatorContainer = Container(DialogueCreator, {
  mapDispatch: {
    onChangeNewDialogueTitle: actions.dialogue.updateNewDialogueTitle,
    onSubmitDialogue: actions.dialogue.add
  },
  mapState(state) {
    return {
      newDialogueTitle: state.dialogue.newDialogueTitle
    }
  }
})

export default DialogueCreatorContainer
