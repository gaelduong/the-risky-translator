import { Location } from '@Type/location'

const getLocationId = (location: Location) => {
  return location.id
}

const getLocationName = (location: Location) => {
  return location.locationName
}

const getLocationImage = (location: Location) => {
  return location.image
}

const getLocationsByTownId = (townId: number, allLocations: Location[]) => {
  const start = townId * 9
  const end = start + 8
  const locations = []

  for (let i = start; i <= end; i++) {
    locations.push(allLocations[i])
  }

  const remaining = (townId + 1) * 9

  if (remaining <= allLocations.length) {
    return locations
  } else {
    return locations.slice(0, allLocations.length % 9)
  }
}

const getMaxLocationPage = (allLocations: Location[]) => {
  return 24
}

const getTownNameByTownId = (townId: number) => {
  return `Town ${townId + 1}`
}

export {
  getLocationId,
  getLocationName,
  getLocationImage,
  getLocationsByTownId,
  getMaxLocationPage,
  getTownNameByTownId
}
