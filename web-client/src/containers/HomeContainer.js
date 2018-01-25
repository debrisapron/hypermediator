import * as reactRedux from 'react-redux'
import actions from '../store/actions'
import Home from '../components/Home'

let mapDispatchToProps = {
  onRender: actions.fetchDialogueSummaries,
  onClickUserDropdown: actions.showLoginModal
}

function mapStateToProps(state) {
  return {
    dialogueSummaries: state.dialogueSummaries
  }
}

let HomeContainer = reactRedux.connect(mapStateToProps, mapDispatchToProps)(Home)

export default HomeContainer
