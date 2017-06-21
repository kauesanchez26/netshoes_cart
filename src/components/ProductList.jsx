import React from 'react'
import { array, func } from 'prop-types'

import ProductCard from './ProductCard'

const ProductList = (props) => {
  const {
    products,
    showCart,
    addToCart,
  } = props
  const handleAdd = (product) => () => {
    addToCart(product)
    showCart()
  }
  return (
    <div>
      <div className="list">
        <h1 className="inlineb"> Lista de produtos</h1>
        <button className="cart_img inlineb" onClick={showCart}>
          <img src='cart.png' alt='product'/>
        </button>
      </div>

      <div className="row">
        {products.map(product => (
          <ProductCard key={product.id} {...product} onAdd={handleAdd(product)} />
        ))}
      </div>
    </div>
  )
}
ProductList.propTypes = {
  products: array,
  showCart: func.isRequired,
  addToCart: func.isRequired,
}
ProductList.defaultProps = {
  products: []
}

export default ProductList
