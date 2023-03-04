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

export {
  getLocationId,
  getLocationName,
  getLocationImage,
  checkLocationUnlocked
}
