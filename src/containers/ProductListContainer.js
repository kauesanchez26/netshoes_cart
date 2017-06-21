import { connect } from 'react-redux'

import ProductList from '../components/ProductList'
import  { addToCart } from '../reducers/cartItems'
import  { showCart } from '../reducers/cart'

export default connect( st => ({products: st.products}), { addToCart, showCart } )(ProductList)
