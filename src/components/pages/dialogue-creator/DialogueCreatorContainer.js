import * as reactRedux from 'react-redux'
import * as actions from '../../../actions'
import DialogueCreator from './DialogueCreator'

let DialogueCreatorContainer = reactRedux.connect(
  (state) => ({
    newDialogueTitle: state.dialogue.newDialogueTitle
  }),
  {
    onChangeNewDialogueTitle: actions.dialogue.updateNewDialogueTitle,
    onSubmitDialogue: actions.dialogue.add
  }
)(DialogueCreator)

export default DialogueCreatorContainer
