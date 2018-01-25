import * as t from '../types'
import h from 'react-hyperscript'
import LoginModal from './LoginModal'

function Modal(props: {
  activeModal: t.ModalType,
  onDismissModal: () => void
}) {
  switch (props.activeModal) {
    case t.ModalType.LOGIN: return h(LoginModal, { onDismissModal: props.onDismissModal })
    case undefined: return h('span')
  }
}

export default Modal
