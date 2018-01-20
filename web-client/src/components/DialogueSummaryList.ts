import { ListGroup, ListGroupItem } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import * as t from '../types'
import h from 'react-hyperscript'

function DialogueSummary(dialogueSummary: t.DialogueSummary) {
  return h(ListGroupItem, [
    h(Link, { to: `/d/${dialogueSummary.id}` }, dialogueSummary.title)
  ])
}

function DialogueSummaryList({ dialogueSummaries }: { dialogueSummaries: t.DialogueSummaries }) {
  return h(ListGroup, dialogueSummaries.map(DialogueSummary))
}

export default DialogueSummaryList
