import * as actions from '../../../actions'
import Container from '../../Container'
import Home from './Home'

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
