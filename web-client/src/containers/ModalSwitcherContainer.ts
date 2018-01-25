import { connect } from 'react-redux'
import * as t from '../types'
import * as actions from '../store/actions'
import ModalSwitcher from '../components/ModalSwitcher'

let mapDispatchToProps = {
  onDismissModal: actions.hideModal
}

function mapStateToProps(state: t.State) {
  return {
    activeModal: state.activeModal
  }
}

let ModalContainer = connect<{}, {}, t.State>(mapStateToProps, mapDispatchToProps)(ModalSwitcher)

export default ModalContainer
