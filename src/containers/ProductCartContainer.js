import { connect } from 'react-redux'

import ProductCart from '../components/ProductCart'
import * as actions from '../reducers/cartItems'
import { hideCart } from '../reducers/cart'

export default connect( st => ({cartItems: st.cartItems, cart: st.cart}), {...actions, hideCart} )(ProductCart)
