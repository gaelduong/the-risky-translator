import { Route, Routes } from 'react-router-dom'
import { CityMapData } from '../../../data/cityMapData'
import { LocationData } from '../../../data/locationData'

import CityMap from '../CityMap'
import Home from '../Home'
import Map from '../Map'
import Work from '../Work'

const MapData = CityMapData.map(cityMap => ({
  ...cityMap,
  locations: cityMap.locationIds.map(locationId =>
    LocationData.find(location => location.id === locationId)
  )
}))

const Game = () => {
  const cityMapList = MapData.map(cityMap => {
    return (
      <CityMap
        cityMap={cityMap}
        numCityMaps={MapData.length}
        key={cityMap.cityMapId}
        route={cityMap.route}
      />
    )
  })

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      {cityMapList.map(cityMap => (
        <Route
          key={cityMap.props.route}
          path={cityMap.props.route}
          element={cityMap}
        />
      ))}
      <Route path="/work" element={<Work />} />
      <Route path="/map" element={<Map />} />
    </Routes>
  )
}

export default Game
