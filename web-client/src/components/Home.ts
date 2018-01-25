import * as t from '../types'
import h from 'react-hyperscript'
import Page from './Page'
import DialogueSummaryList from './DialogueSummaryList'

function Home(props: {
  dialogueSummaries: t.DialogueSummaries,
  onRender: () => void,
  onClickUserDropdown: () => void
}) {
  if (!props.dialogueSummaries) { props.onRender() }
  let content = props.dialogueSummaries
    ? h(DialogueSummaryList, { dialogueSummaries: props.dialogueSummaries })
    : h('p', 'Loading...')
  return h(Page, { title: 'Hot Dialogues', onClickUserDropdown: props.onClickUserDropdown }, content)
}

export default Home
