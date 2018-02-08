import * as rr from 'react-router-dom'
import h from 'react-hyperscript'

function DialogueSummary(dialogueSummary) {
  return h('li', [
    h(rr.Link, { to: `/d/${dialogueSummary.id}` }, dialogueSummary.title)
  ])
}

function DialogueSummaryList({ dialogueSummaries }) {
  return h('ul', dialogueSummaries.map(DialogueSummary))
}

export default DialogueSummaryList
