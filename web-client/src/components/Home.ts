import * as t from '../types'
import h from 'react-hyperscript'
import Page from './Page'
import DialogueSummaryList from './DialogueSummaryList'

function Home(props: {
  dialogueSummaries: t.DialogueSummaries,
  fetchDialogueSummaries: () => void,
  showLoginModal: () => void
}) {
  if (!props.dialogueSummaries) { props.fetchDialogueSummaries() }
  let content = props.dialogueSummaries
    ? h(DialogueSummaryList, { dialogueSummaries: props.dialogueSummaries })
    : h('p', 'Loading...')
  return h(Page, { title: 'Hot Dialogues', showLoginModal: props.showLoginModal }, content)
}

export default Home
