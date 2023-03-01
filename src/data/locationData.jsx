import {
  houseImg,
  restaurantImg,
  casinoImg,
  parkImg,
  schoolImg,
  storeImg,
  hospitalImg
} from '@Assets/images'

export const LocationData = [
  {
    id: 0,
    locationName: 'Landmark',
    position: { x: 100, y: 100 },
    image: houseImg,
    requirements: { minMoney: -Infinity },
    partition: { start: 0, end: 9 }
  },
  {
    id: 1,
    locationName: 'Thao Dien',
    position: { x: 100, y: 100 },
    image: hospitalImg,
    requirements: { minMoney: 50 },
    partition: { start: 10, end: 19 }
  },
  {
    id: 2,
    locationName: 'Dam Sen',
    position: { x: 100, y: 200 },
    image: houseImg,
    requirements: { minMoney: 100 },
    partition: { start: 20, end: 29 }
  },
  {
    id: 3,
    locationName: 'Cafe',
    position: { x: 100, y: 100 },
    image: casinoImg,
    requirements: { minMoney: 150 },
    partition: { start: 30, end: 39 }
  },
  {
    id: 4,
    locationName: 'Store',
    position: { x: 100, y: 200 },
    image: storeImg,
    requirements: { minMoney: 200 },
    partition: { start: 40, end: 49 }
  },
  {
    id: 5,
    locationName: 'Super Market',
    position: { x: 100, y: 100 },
    image: casinoImg,
    requirements: { minMoney: 50 },
    partition: { start: 10, end: 19 }
  },
  {
    id: 6,
    locationName: 'District 4',
    position: { x: 100, y: 200 },
    image: parkImg,
    requirements: { minMoney: 100 },
    partition: { start: 20, end: 29 }
  },
  {
    id: 7,
    locationName: 'Fuji',
    position: { x: 100, y: 100 },
    image: restaurantImg,
    requirements: { minMoney: 150 },
    partition: { start: 30, end: 39 }
  },
  {
    id: 8,
    locationName: 'Pham Ngu Lao',
    position: { x: 100, y: 200 },
    image: schoolImg,
    requirements: { minMoney: 200 },
    partition: { start: 40, end: 49 }
  },
  {
    id: 9,
    locationName: 'Hospital',
    position: { x: 100, y: 100 },
    image: hospitalImg,
    requirements: { minMoney: 50 },
    partition: { start: 10, end: 19 }
  },
  {
    id: 10,
    locationName: 'Timesquare',
    position: { x: 100, y: 200 },
    image: parkImg,
    requirements: { minMoney: 100 },
    partition: { start: 20, end: 29 }
  },
  {
    id: 11,
    locationName: 'Sushi Restaurant',
    position: { x: 100, y: 100 },
    image: restaurantImg,
    requirements: { minMoney: 150 },
    partition: { start: 30, end: 39 }
  },
  {
    id: 12,
    locationName: 'Location 2B',
    position: { x: 100, y: 200 },
    image: parkImg,
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
