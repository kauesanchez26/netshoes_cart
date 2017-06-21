import React from 'react'
import { func } from 'prop-types'


import './Grid.css'
import './Layout.css'
import ProductListContainer from '../containers/ProductListContainer'
import ProductCartContainer from '../containers/ProductCartContainer'

const Layout = (props) => {
  const { showCart, hideCart } = props
  return (
    <div className="container">
      <div className="row">
        <div className="App-header col-md-8 offset-md-2">
          <ProductListContainer />
          <ProductCartContainer />
        </div>
      </div>
    </div>
  )
}
Layout.propTypes = {
  showCart: func.isRequired,
  hideCart: func.isRequired,
}

export default Layout
