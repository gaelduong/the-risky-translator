import { LocationData } from '@Data/locationData'

const getLocationId = location => {
  return location.id
}

const getLocationName = location => {
  return location.locationName
}

const getLocationImage = location => {
  return location.image
}

const checkLocationUnlocked = (locationId, gameState) => {
  return (
    LocationData.find(location => location.id === locationId).requirements
      .minMoney <= gameState.money
  )
}

const getLocationsByTownId = (townId, allLocations) => {
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

const getMaxLocationPage = allLocations => {
  return 24
}

const getTownNameByTownId = townId => {
  return `Town ${townId}`
}

export {
  getLocationId,
  getLocationName,
  getLocationImage,
  checkLocationUnlocked,
  getLocationsByTownId,
  getMaxLocationPage,
  getTownNameByTownId
}
