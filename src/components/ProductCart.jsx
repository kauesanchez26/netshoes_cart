import React from 'react'
import { array, func, shape, bool, } from 'prop-types'

import './ProductCart.css'
import CartItem from './CartItem'
import { formatPrice } from '../utils/money'

const ProductCart = (props) => {
  const {
    cart: { show },
    cartItems,
    removeFromCart,
    hideCart,
    mouseIn,
    mouseOut,
  } = props
  const sum = (acc, cartItem) => acc + cartItem.priceInCents
  const subtotal = cartItems.reduce(sum, 0)
  return (
    <div style={{display: show ? 'block' : 'none'}}>
      <div className="box-cart col-md-8 padding_lr">
        <div className="cart">
          <button className="btn-quit" onClick={hideCart}>X</button>
          <div className="cart-title center">
            <img src='sacola.jpg' alt='bag'/>
            <div className="title_img"> Sacola</div>
          </div>
          {cartItems.map((product, index) => (
            <CartItem key={index}
              {...product}
              onMouseIn={() => mouseIn(index)}
              onMouseOut={() => mouseOut(index)}
              onRemove={() => removeFromCart(index)}
            />
          ))}
          <div className="subt ">
            <div className="col-md-5 inlineb text-l">
              Subtotal
            </div>
            <div className="col-md-7 final-price">
              {formatPrice(subtotal)}
            </div>
            <div className=" col-md-12 pd0">
              <div className="btn-buy">COMPRAR</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
ProductCart.propTypes = {
  cart: shape({
    show: bool
  }),
  cartItems: array,
  removeFromCart: func.isRequired,
  mouseIn: func.isRequired,
  mouseOut: func.isRequired,
  hideCart: func.isRequired,
}
ProductCart.defaultProps = {
  cartItems: [],
  cart: { show: false }
}

export default ProductCart
