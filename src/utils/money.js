import accounting from 'accounting-js'

export const formatPrice = (priceInCents) =>
  accounting.formatMoney(priceInCents/100, {
    symbol: "R$ ",
    decimal: ',',
    thousand: '',
  })
