import { connect } from 'react-redux'
import * as t from '../types'
import * as actions from '../store/actions'
import Home from '../components/Home'

let mapDispatchToProps = {
  fetchDialogueSummaries: actions.fetchDialogueSummaries,
  showLoginModal: actions.showLoginModal
}

function mapStateToProps(state: t.State) {
  return {
    dialogueSummaries: state.dialogueSummaries
  }
}

let HomeContainer = connect<{}, {}, t.State>(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
