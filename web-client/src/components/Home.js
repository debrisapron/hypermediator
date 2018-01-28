import h from 'react-hyperscript'
import PageContainer from '../containers/PageContainer'
import DialogueSummaryList from './DialogueSummaryList'

function Home({ dialogueSummaries, onRender }) {
  if (!dialogueSummaries.data) {
    onRender()
    return h('p', 'Loading dialogues...')
  }
  return (
    h(PageContainer, { title: 'Hot Dialogues' }, [
      h(DialogueSummaryList, { dialogueSummaries: dialogueSummaries.data })
    ])
  )
}

export default Home
