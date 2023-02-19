export const LocationData = [
  {
    id: 0,
    locationName: 'City 0',
    cityMap: 0,
    position: { x: 100, y: 100 },
    image: 0,
    requirements: { minMoney: -Infinity },
    partition: { start: 0, end: 9 }
  },
  {
    id: 1,
    locationName: 'City 1A',
    cityMap: 0,
    position: { x: 100, y: 100 },
    requirements: { minMoney: 50 },
    partition: { start: 10, end: 19 }
  },
  {
    id: 2,
    locationName: 'City 1B',
    cityMap: 0,
    position: { x: 100, y: 200 },
    requirements: { minMoney: 100 },
    partition: { start: 20, end: 29 }
  },
  {
    id: 3,
    locationName: 'City 2A',
    cityMap: 0,
    position: { x: 100, y: 100 },
    requirements: { minMoney: 150 },
    partition: { start: 30, end: 39 }
  },
  {
    id: 4,
    locationName: 'City 2B',
    cityMap: 0,
    position: { x: 100, y: 200 },
    requirements: { minMoney: 200 },
    partition: { start: 40, end: 49 }
  }
]

const a = {
  requirements: {
    exp: 1000,
    minMoney: 1,
    unlockedLocationIds: [1, 2]
  }
}
