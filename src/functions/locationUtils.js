import { LocationData } from '@Data/locationData'

const checkLocationUnlocked = (locationId, gameState) => {
  return (
    LocationData.find(location => location.id === locationId).requirements
      .minMoney <= gameState.money
  )
}

export { checkLocationUnlocked }
