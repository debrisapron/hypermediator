import h from 'react-hyperscript'
import DialogueSummaryList from './DialogueSummaryList'

function Home({ dialogueSummaries, onRender }) {
  return h(DialogueSummaryList, { dialogueSummaries: dialogueSummaries.data })
}

export default Home
