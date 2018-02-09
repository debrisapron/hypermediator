import * as reactRedux from 'react-redux'
import Home from './Home'

let HomeContainer = reactRedux.connect(
  (state) => ({
    dialogueSummaries: state.dialogueSummaries
  })
)(Home)

export default HomeContainer
