import * as actions from '../../actions'
import Container from '../Container'
import Page from './Page'

let PageContainer = Container(Page, {
  mapDispatch: {
    onClickLogin: actions.auth.showLoginModal,
    onClickLogout: actions.auth.logout
  },
  mapState(state, ownProps) {
    return {
      loggedInUser: state.loggedInUser,
      history: ownProps.history
    }
  }
})

export default PageContainer
