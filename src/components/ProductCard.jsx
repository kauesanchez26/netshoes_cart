import React from 'react'
import { string, number, func } from 'prop-types'

import './ProductCard.css'
import { formatPrice } from '../utils/money'

const ProductCard = (props) => {
  const {
    title,
    description,
    priceInCents,
    onAdd,
  } = props
  return (
    <div className='col-md-4'>
    <div className='box-product'>
      <img src='default.png' alt='product'/>
      <div className='description'>
        {title} - {description}
      </div>
      <div className='divisor_yellow'></div>
      <p className='price'>{formatPrice(priceInCents)}</p>
      <button className='btn_add' onClick={onAdd}>Adicionar no carrinho</button>
    </div>
    </div>
  )
}
ProductCard.propTypes = {
  title: string.isRequired,
  description: string.isRequired,
  priceInCents: number.isRequired,
  onAdd: func.isRequired,
}

export default ProductCard
