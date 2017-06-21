import reducer from '../../reducers/products'

describe('initial state', () => {
  it('loads products', () => {
    expect(reducer(undefined, {}).length).toBeGreaterThan(0)
  })
})
