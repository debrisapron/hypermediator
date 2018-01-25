import h from 'react-hyperscript'
import * as b from 'react-bootstrap'
import Modal from './Modal'

function LoginModal(props: {
  onDismissModal: () => void
}) {
  return (
    h(Modal, { onDismissModal: props.onDismissModal, title: 'Login' }, [
      h('form', [
        h(b.FormGroup, [
          h(b.ControlLabel, 'Please enter your email'),
          h(b.FormControl, { type: 'text', placeholder: 'you@example.com' })
        ])
      ])
    ])
  )
}

export default LoginModal
