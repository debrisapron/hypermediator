import * as reactRedux from 'react-redux'
import * as actions from '../store/actions'
import Home from '../components/Home'

let mapDispatchToProps = {
  onRender: actions.dialogueSummary.fetchAll
}

function mapStateToProps(state) {
  return {
    dialogueSummaries: state.dialogueSummaries
  }
}

let HomeContainer = reactRedux.connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
