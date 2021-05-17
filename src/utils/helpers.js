export const formatPrice = (number) => {
    return new Intl.NumberFormat('fr', {
      style: 'currency',
      currency: 'EUR',
    }).format(number / 100)
  }