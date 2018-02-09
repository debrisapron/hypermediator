import * as reactRedux from 'react-redux'
import * as actions from '../../actions'
import Page from './Page'

let PageContainer = reactRedux.connect(
  (state) => ({
    loggedInUser: state.loggedInUser,
    location: state.location.type,
    isBusy: state.app.isBusy
  }),
  {
    onClickLogin: actions.auth.showLoginModal,
    onClickLogout: actions.auth.logout
  }
)(Page)

export default PageContainer
