import { parkImg } from '@Assets/images'

enum LocationType {
  REGULAR,
  MIX,
  BIG_MIX,
  MEGA_MIX,
  EVERYTHING
}

export const LocationTypeData = [
  {
    type: LocationType.REGULAR
  },
  {
    type: LocationType.REGULAR
  },
  {
    type: LocationType.REGULAR
  },
  {
    type: LocationType.MIX
  },
  {
    type: LocationType.REGULAR
  },
  {
    type: LocationType.REGULAR
  },
  {
    type: LocationType.REGULAR
  }
]

export const LocationData = [...Array(30)].map((location, index) => {
  return {
    id: index,
    type: LocationType.REGULAR,
    locationName: `Location ${index}`,
    image: parkImg,
    partition: { start: index * 10, end: index * 10 + 10 }
  }
})

const a = {
  requirements: {
    exp: 1000,
    minMoney: 1,
    unlockedLocationIds: [1, 2]
  }
}
