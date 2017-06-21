import products from './products.json'

export const getProducts = () => products["products"].map(product => ({
  ...product,
  priceInCents: Math.ceil(product.price * 100)
}))
