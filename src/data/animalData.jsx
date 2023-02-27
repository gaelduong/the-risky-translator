const ANIMALS = ['A', 'B', 'C']

export const ANIMALS_ITEMS = ANIMALS.map((item, idx) => {
  const moneyBuyRequired = 10 * idx * (idx + 1) * idx * idx

  return {
    id: idx,
    name: item,
    description: `A`,
    isBought: false,
    buyRequirements: {
      money: moneyBuyRequired
    }
  }
})
