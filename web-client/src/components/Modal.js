import * as b from 'react-bootstrap'
import h from 'react-hyperscript'

function Modal({ children, title, onDismissModal }) {
  return (
    h(b.Modal, { show: true, onHide: onDismissModal }, [
      h(b.Modal.Header, { closeButton: true }, h(b.Modal.Title, title)),
      h(b.Modal.Body, {}, children),
      h(b.Modal.Footer, {}, h(b.Button, 'Submit'))
    ])
  )
}

export default Modal
