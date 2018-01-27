import * as reactRedux from 'react-redux'
import * as actions from '../store/actions'
import Page from '../components/Page'

let mapDispatchToProps = {
  onClickLogin: actions.showLoginModal,
  onClickLogout: actions.logout
}

function mapStateToProps(state, ownProps) {
  return {
    children: ownProps.children,
    loggedInUser: state.loggedInUser,
    title: ownProps.title
  }
}

let PageContainer = reactRedux.connect(mapStateToProps, mapDispatchToProps)(Page)

export default PageContainer
