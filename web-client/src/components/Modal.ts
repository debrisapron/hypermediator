import { Button, Modal as _Modal } from 'react-bootstrap'
import h from 'react-hyperscript'

function Modal(props: {
  children: ReadonlyArray<any>,
  title: string,
  onDismissModal: () => void
}) {
  return (
    h(_Modal, { show: true, onHide: props.onDismissModal }, [
      h(_Modal.Header, { closeButton: true }, h(_Modal.Title, props.title)),
      h(_Modal.Body, {}, props.children),
      h(_Modal.Footer, {}, h(Button, 'Submit'))
    ])
  )
}

export default Modal
