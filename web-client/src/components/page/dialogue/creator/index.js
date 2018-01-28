// import * as actions from '../store/actions'
import Container from '../../../Container'
import DialogueCreator from './DialogueCreator'

let DialogueCreatorContainer = Container(DialogueCreator, {
  mapDispatch: {},
  mapState(state) {
    return {
      // dialogueSummaries: state.dialogueSummaries
    }
  }
})

export default DialogueCreatorContainer
