import React from 'react'
import { string, number, func, bool } from 'prop-types'

import { formatPrice } from '../utils/money'

const CartItem = (props) => {
  const {
    title,
    description,
    priceInCents,
    hover,
    onRemove,
    onMouseIn,
    onMouseOut,
  } = props
  return (
    <div
      className='box-product-cart'
      style={{backgroundColor: hover ? '#131316' : '#202025'}}
      onMouseEnter={onMouseIn}
      onMouseLeave={onMouseOut}
    >
      <div className='col-md-2 inlineb valign-top'>
        <img src='default_thumb.png' alt='product'/>
      </div>
      <div className='col-md-7 inlineb text-l valign-top'>
        <div className='title-p-cart'> {title} </div>
        <div className='description-p-cart'> {description} </div>
      </div>
      <div className='col-md-3 inlineb text-r valign-top'>
        <button className='btn_remove-cart' onClick={onRemove}>X</button>
        <div className='price-p-cart'>{formatPrice(priceInCents)}</div>
      </div>
    </div>
  )
}
CartItem.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  priceInCents: number.isRequired,
  hover: bool,
  onRemove: func.isRequired,
  onMouseIn: func.isRequired,
  onMouseOut: func.isRequired,
}
CartItem.defaultProps = {
  hover: false,
}

export default CartItem
