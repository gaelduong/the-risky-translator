const BUSINESSES = [
  'Lemonade stand',
  'Car washing service',
  'Pet sitting',
  'Lawn care',
  'Babysitting',
  'Handyman services',
  'House cleaning',
  'Dog walking',
  'Personal shopping',
  'Tutoring',
  'Personal training',
  'Food truck',
  'Coffee cart',
  'Craft booth',
  'Photography services',
  'Event planning',
  'Graphic design',
  'Web development',
  'Social media consulting',
  'Boutique',
  'Food delivery',
  'Restaurant',
  'Bed and breakfast',
  'Small retail store',
  'Salon',
  'Day spa',
  'Gym',
  'Hotel',
  'Casino',
  'Movie theater',
  'Underwater hotel',
  'Robot-run cafe',
  'Space tourism',
  'Self-driving car rental',
  'Personal drone delivery service',
  'Virtual reality arcade',
  '3D-printed clothing line',
  'Air taxi service',
  'Artificial intelligence chatbot therapy',
  'Smartphone breathalyzer company'
]

export const ITEMS = BUSINESSES.map((item, idx) => {
  const moneyBuyRequired = 10 * idx * (idx + 1) * idx * idx
  const energyRequiredPerCollection = 1 * (idx + 1)
  const timeBetweenCollections = (idx + 1) * 5
  const moneyPerCollection = (idx + 1) * 100 * (1 + idx)

  return {
    id: idx,
    name: item,
    description: `-${energyRequiredPerCollection} Energy, +$${moneyPerCollection}`,
    isBought: false,
    buyRequirements: {
      money: moneyBuyRequired
    },
    generate: {
      moneyPerCollection,
      timeBetweenCollections,
      energyRequiredPerCollection,
      moneyGenerated: 0,
      lastCollectionTime: null,
      progress: 0,
      timeRemainingInSeconds: Infinity
    }
  }
})
