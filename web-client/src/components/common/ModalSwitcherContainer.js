import * as actions from '../actions'
import Container from './Container'
import ModalSwitcher from '../components/ModalSwitcher'

let ModalContainer = Container(ModalSwitcher, {
  mapDispatch: {
    onDismissModal: actions.app.hideModal
  },
  mapState(state) {
    return {
      activeModal: state.activeModal
    }
  }
})

export default ModalContainer
