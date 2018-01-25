import * as reactRedux from 'react-redux'
import actions from '../store/actions'
import ModalSwitcher from '../components/ModalSwitcher'

let mapDispatchToProps = {
  onDismissModal: actions.hideModal
}

function mapStateToProps(state) {
  return {
    activeModal: state.activeModal
  }
}

let ModalContainer = reactRedux.connect(mapStateToProps, mapDispatchToProps)(ModalSwitcher)

export default ModalContainer
