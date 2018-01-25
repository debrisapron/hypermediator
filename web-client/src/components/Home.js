import h from 'react-hyperscript'
import Page from './Page'
import DialogueSummaryList from './DialogueSummaryList'

function Home({ dialogueSummaries, onRender, onClickUserDropdown }) {
  if (!dialogueSummaries) { onRender() }
  let content = dialogueSummaries
    ? h(DialogueSummaryList, { dialogueSummaries })
    : h('p', 'Loading...')
  return h(Page, { onClickUserDropdown, title: 'Hot Dialogues' }, content)
}

export default Home
