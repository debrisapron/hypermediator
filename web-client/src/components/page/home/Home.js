import h from 'react-hyperscript'
import DialogueSummaryList from './DialogueSummaryList'

function Home({ dialogueSummaries, onRender }) {
  if (!dialogueSummaries.data) {
    onRender()
    return h('p', 'Loading dialogues...')
  }
  return h(DialogueSummaryList, { dialogueSummaries: dialogueSummaries.data })
}

export default Home
