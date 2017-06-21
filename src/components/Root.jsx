import React from 'react'
import { Provider } from 'react-redux'
import { any } from 'prop-types'

import LayoutContainer from '../containers/LayoutContainer'

const Root = ({store,}) => {
  return (
    <Provider store={store}>
      <LayoutContainer />
    </Provider>
  )
}
Root.propTypes = {
  store: any
}

export default Root
