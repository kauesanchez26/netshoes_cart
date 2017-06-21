const ADD_TO_CART = '@@cartItems/ADD_TO_CART'
const REMOVE_FROM_CART = '@@cartItems/REMOVE_FROM_CART'
const MOUSE_IN = '@@cartItems/MOUSE_IN'
const MOUSE_OUT = '@@cartItems/MOUSE_OUT'

const initialState = []
export default (state = initialState, action) => {
  switch (action.type) {
    case ADD_TO_CART: return [...state, {...action.product, hover: false},]
    case REMOVE_FROM_CART: {
      if (action.index < 0 || action.index >= state.length) return state
      return [
        ...state.slice(0, action.index),
        ...state.slice(action.index + 1),
      ]
    }
    case MOUSE_IN: return [
      ...state.slice(0, action.index),
      {...state[action.index], hover: true},
      ...state.slice(action.index + 1),
    ]
    case MOUSE_OUT: return [
      ...state.slice(0, action.index),
      {...state[action.index], hover: false},
      ...state.slice(action.index + 1),
    ]
    default: return state
  }
}

export const addToCart = (product) => ({type: ADD_TO_CART, product})
export const removeFromCart = (index) => ({type: REMOVE_FROM_CART, index})
export const mouseIn = (index) => ({type: MOUSE_IN, index})
export const mouseOut = (index) => ({type: MOUSE_OUT, index})
