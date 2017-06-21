import reducer, { showCart, hideCart, } from '../../reducers/cart'

describe('initial state', () => {
  it('has show set to false', () => {
    expect(reducer(undefined, {}).show).toBe(false)
  })
})

describe('showCart', () => {
  const initialState = { show: false, }
  it('changes show to true', () => {
    expect(reducer(initialState, showCart()).show).toBe(true)
  })
})

describe('hideCart', () => {
  const initialState = { show: true, }
  it('changes show to true', () => {
    expect(reducer(initialState, hideCart()).show).toBe(false)
  })
})
