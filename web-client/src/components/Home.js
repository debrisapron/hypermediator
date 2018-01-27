import h from 'react-hyperscript'
import PageContainer from '../containers/PageContainer'
import DialogueSummaryList from './DialogueSummaryList'

function Home({ dialogueSummaries, onRender }) {
  if (!dialogueSummaries) { onRender() }
  return h(PageContainer, { title: 'Hot Dialogues' }, dialogueSummaries
    ? h(DialogueSummaryList, { dialogueSummaries })
    : h('p', 'Loading...')
  )
}

export default Home
