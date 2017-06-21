import { createStore, combineReducers, compose } from 'redux'
import { persistStore, autoRehydrate, } from 'redux-persist'

import products from './reducers/products'
import cartItems from './reducers/cartItems'
import cart from './reducers/cart'

const rootReducer = combineReducers({
  products,
  cartItems,
  cart,
})

export default function configureStore() {
  return new Promise( (resolve, reject) => {
    try {
      const store = createStore(
        rootReducer,
        undefined,
        compose(
          autoRehydrate(),
          window.devToolsExtension ? window.devToolsExtension() : f => f,
        )
      )

      // Added to global so it can be purged later when encountering inconsistencies
      window.store = persistStore(
        store, {}, () => resolve(store)
      )
    } catch (e) {
      reject(e)
    }
  })
}
