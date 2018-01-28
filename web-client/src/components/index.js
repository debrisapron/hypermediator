import * as reactRedux from 'react-redux'
import h from 'react-hyperscript'
import PageContainer from './page'

function Root({ store }) {
  return h(reactRedux.Provider, { store }, h(PageContainer))
}

export default Root
