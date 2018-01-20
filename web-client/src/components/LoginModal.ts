import h from 'react-hyperscript'
import Modal from './Modal'

function LoginModal(props: {
  hideModal: () => void
}) {
  return h(
    Modal,
    { hideModal: props.hideModal, title: 'Login' },
    `Elit est explicabo ipsum eaque dolorem blanditiis doloribus sed id ipsam, beatae, rem fuga id
     earum? Inventore et facilis obcaecati.`
  )
}

export default LoginModal
