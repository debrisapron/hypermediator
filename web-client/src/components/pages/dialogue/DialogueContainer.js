import * as reactRedux from 'react-redux'
import * as actions from '../../../actions'
import Dialogue from './Dialogue'

let DialogueContainer = reactRedux.connect(
  (state) => ({
    dialogue: state.dialogue
  }),
  {
    onChangeDraftStatement: actions.dialogue.updateDraftStatement,
    onSubmitStatement: actions.dialogue.addStatement
  }
)(Dialogue)

export default DialogueContainer
