const SHOW = '@@cart/SHOW'
const HIDE = '@@cart/HIDE'

const initialState = { show: false }
export default (state = initialState, action) => {
  switch (action.type) {
    case SHOW: return { ...state, show: true }
    case HIDE: return { ...state, show: false }
    default: return state
  }
}

export const showCart = () => ({type: SHOW})
export const hideCart = () => ({type: HIDE})
