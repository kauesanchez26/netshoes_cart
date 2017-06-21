import { getProducts } from '../api/products'

const initialState = getProducts()
export default (state = initialState, action) => {
  switch (action.type) {
    default: return state
  }
}
