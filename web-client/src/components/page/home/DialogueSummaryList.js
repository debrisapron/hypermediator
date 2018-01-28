import * as b from 'react-bootstrap'
import { Link } from 'react-router-dom'
import h from 'react-hyperscript'

function DialogueSummary(dialogueSummary) {
  return h(b.ListGroupItem, [
    h(Link, { to: `/d/${dialogueSummary.id}` }, dialogueSummary.title)
  ])
}

function DialogueSummaryList({ dialogueSummaries }) {
  return h(b.ListGroup, dialogueSummaries.map(DialogueSummary))
}

export default DialogueSummaryList
