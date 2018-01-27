import * as actions from '../store/actions'
import Container from './Container'
import Home from '../components/Home'

let HomeContainer = Container(Home, {
  mapDispatch: {
    onRender: actions.dialogueSummary.fetchAll
  },
  mapState(state) {
    return {
      dialogueSummaries: state.dialogueSummaries
    }
  }
})

export default HomeContainer
