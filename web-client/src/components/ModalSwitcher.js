import h from 'react-hyperscript'
import LoginModal from './LoginModal'

function ModalSwitcher({ activeModal, onDismissModal }) {
  switch (activeModal) {
    case 'LOGIN':
      return h(LoginModal, { onDismissModal })
    default:
      return h('span')
  }
}

export default ModalSwitcher
