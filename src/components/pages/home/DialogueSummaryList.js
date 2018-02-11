import h from 'react-hyperscript'
import Link from 'redux-first-router-link'

function DialogueSummary(dialogueSummary) {
  return h('li', [
    h(Link, { to: `/d/${dialogueSummary.id}` }, dialogueSummary.title)
  ])
}

function DialogueSummaryList({ dialogueSummaries }) {
  return h('ul', dialogueSummaries.map(DialogueSummary))
}

export default DialogueSummaryList
