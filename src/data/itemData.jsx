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
  const energyRequired = 1 * (idx + 1)
  const timeRequiredInSeconds = (idx + 1) * 10
  const moneyGenerated = 1 * (idx * 2 + 1)

  return {
    id: idx,
    name: item,
    description: `-${energyRequired} Energy, +$${moneyGenerated}`,
    isBought: false,
    buyRequirements: {
      money: moneyBuyRequired
    },
    generate: {
      inProgress: false,
      timeRequiredInSeconds,
      times: {
        startTime: null,
        endTime: null
      },
      moneyGenerated: moneyGenerated,
      energyRequired
    }
  }
})

console.log(ITEMS)

// const item = [
//   {
//     id: 0,
//     name: 'Tree A',
//     description: 'A beautiful tree',
//     buyRequirements: {
//       costRequired: 100,
//       energyRequired: 100,
//       expRequired: 50
//     },
//     currentLevel: 1,
//     image: 'treeA.png',
//     generatedMoney: 10,
//     upgradedForms: [
//       {
//         id: 0,
//         name: 'Tree A1',
//         description: 'A beautiful tree',
//         image: 'treeA1.png',
//         upgradeCost: 100
//       },
//       {
//         id: 1,
//         name: 'Tree A2',
//         description: 'A beautiful tree',
//         image: 'treeA2.png',
//         upgradeCost: 200
//       },
//       {
//         id: 2,
//         name: 'Tree A3',
//         description: 'A beautiful tree',
//         image: 'treeA3.png',
//         upgradeCost: 300
//       }
//     ]
//   }
// ]

// const items = {
//   treeA: [
//     {
//       name: 'Tree A1',
//       description: 'A beautiful tree',
//       image: 'treeA1.png',
//       requirements: {
//         cost: 100,
//         expRequired: 50
//       }
//     },
//     {
//       name: 'Tree A2',
//       description: 'A beautiful tree',
//       image: 'treeA1.png',
//       requirements: {
//         cost: 200,
//         expRequired: 50
//       }
//     },
//     {
//       name: 'Tree A3',
//       description: 'A beautiful tree',
//       image: 'treeA1.png',
//       requirements: {
//         cost: 300,
//         expRequired: 50
//       }
//     }
//   ]
// }
