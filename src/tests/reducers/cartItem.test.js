import reducer, {
  addToCart,
  removeFromCart,
  mouseIn,
  mouseOut
} from '../../reducers/cartItems'

const cartItem = (index = 0, attrs = {}) => ({
  title: `Title ${index}`,
  description: `Description ${index}`,
  priceInCents: 200,
  ...attrs
})
describe('initial state', () => {
  it('is and empty array', () => {
    expect(reducer(undefined, {})).toEqual([])
  })
})

describe('addToCart', () => {
  const cartItem1 = cartItem(2)
  const initialState = [cartItem1]

  it('adds a new cartItem', () => {
    expect(reducer(initialState, addToCart(cartItem(12)))).toEqual([
      cartItem1,
      {
        title: 'Title 12',
        description: 'Description 12',
        priceInCents: 200,
        hover: false,
      },
    ])
  })
})

describe('removeFromCart', () => {
  const cartItem1 = cartItem(3)
  const cartItem2 = cartItem(12)

  const initialState = [cartItem1, cartItem2]

  it('can remove the first element', () => {
    expect(reducer(initialState, removeFromCart(0))).toEqual([cartItem2])
  })

  it('can remove the last element', () => {
    expect(reducer(initialState, removeFromCart(1))).toEqual([cartItem1])
  })

  it('does not remove anything if index is less then 0', () => {
    expect(reducer(initialState, removeFromCart(-1))).toEqual([cartItem1, cartItem2])
  })

  it('does not remove anything if index is bigger then length', () => {
    expect(reducer(initialState, removeFromCart(2))).toEqual([cartItem1, cartItem2])
  })
})

describe('mouseIn', () => {
  const cartItem1 = cartItem(3, {hover: true})
  const cartItem2 = cartItem(12, {hover: false})
  const initialState = [cartItem1, cartItem2]

  it('changes hovered item to true', () => {
    expect(reducer(initialState, mouseIn(1))).toEqual([cartItem1, {...cartItem2, hover: true}])
  })
})

describe('mouseOut', () => {
  const cartItem1 = cartItem(3, {hover: true})
  const cartItem2 = cartItem(12, {hover: false})
  const initialState = [cartItem1, cartItem2]

  it('changes un-hovered item to false', () => {
    expect(reducer(initialState, mouseOut(0))).toEqual([{...cartItem1, hover: false}, cartItem2])
  })
})
