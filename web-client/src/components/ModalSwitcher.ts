import * as t from '../types'
import h from 'react-hyperscript'
import LoginModal from './LoginModal'

function Modal(props: {
  activeModal: t.ModalType,
  hideModal: () => void
}) {
  switch (props.activeModal) {
    case t.ModalType.LOGIN: return h(LoginModal, { hideModal: props.hideModal })
    case undefined: return h('span')
  }
}

export default Modal
