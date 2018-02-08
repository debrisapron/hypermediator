import * as reactRedux from 'react-redux'
import h from 'react-hyperscript'
import PageContainer from './page'

function Root({ store, config }) {
  return h(reactRedux.Provider, { store }, [
    h(PageContainer, { config })
  ])
}

export default Root
