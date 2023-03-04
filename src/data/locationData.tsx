import { parkImg, storeImg } from '@Assets/images'

enum LocationType {
  REGULAR = 'REGULAR',
  MIX = 'MIX',
  BIG_MIX = 'BIG_MIX',
  MEGA_MIX = 'MEGA_MIX',
  EVERYTHING = 'EVERYTHING'
}

const NUM_REGULAR_LOCATIONS = 192
const NUM_REGULAR_IN_MIX = 8
const NUM_MIX_LOCATION = NUM_REGULAR_LOCATIONS / NUM_REGULAR_IN_MIX

const RegularLocationData = [...Array(NUM_REGULAR_LOCATIONS)].map(
  (_, index) => {
    return {
      type: LocationType.REGULAR,
      locationName: `Regular ${index}`,
      image: parkImg,
      hasGroups: [index]
    }
  }
)

const MixLocationData = [...Array(NUM_MIX_LOCATION)].map((_, index) => {
  const groups = [...Array(NUM_REGULAR_IN_MIX)].map(
    (_, idx) => index * NUM_REGULAR_IN_MIX + idx
  )
  return {
    type: LocationType.MIX,
    locationName: `Mix ${index}`,
    image: storeImg,
    hasGroups: groups
  }
})

const EverythingData = {
  type: LocationType.EVERYTHING,
  locationName: 'EVERYTHING!',
  image: storeImg,
  hasGroups: []
}

let CombinedLocationData = [...RegularLocationData]
const mixIndices = [...Array(NUM_MIX_LOCATION)].map((_, idx) => {
  return 4 + idx * 9
})
mixIndices.forEach((mixIdx, idx) => {
  CombinedLocationData.splice(mixIdx, 0, MixLocationData[idx])
})

CombinedLocationData.push(EverythingData)

const LocationData = CombinedLocationData.map((location, idx) => {
  return {
    id: idx,
    ...location
  }
})

// console.log(LocationData)

export { LocationData }
