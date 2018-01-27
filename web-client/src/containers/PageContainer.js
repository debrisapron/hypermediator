import * as actions from '../store/actions'
import Container from './Container'
import Page from '../components/Page'

let PageContainer = Container(Page, {
  mapDispatch: {
    onClickLogin: actions.auth.showLoginModal,
    onClickLogout: actions.auth.logout
  },
  mapState(state, ownProps) {
    return {
      children: ownProps.children,
      loggedInUser: state.loggedInUser,
      title: ownProps.title
    }
  }
})

export default PageContainer
