import { Route, Routes } from 'react-router-dom'
import { CityMapData } from '../../../data/cityMapData'
import { LocationData } from '../../../data/locationData'

import Header from '../../components/Header'
import Animals from '../Animals'
import Battle from '../Battle'
import CityMap from '../CityMap'
import Home from '../Home'
import ItemList from '../ItemList'
import Test from '../Test'
// import Map from '../Map'
import TranslationJob from '../TranslationJob'

const MapData = CityMapData.map(cityMap => ({
  ...cityMap,
  locations: cityMap.locationIds.map(locationId =>
    LocationData.find(location => location.id === locationId)
  )
}))

const Game = () => {
  // useUpdateItems()

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
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        {cityMapList.map(cityMap => (
          <Route
            key={cityMap.props.route}
            path={cityMap.props.route}
            element={cityMap}
          />
        ))}
        <Route path="/work" element={<TranslationJob />} />
        <Route path="/test" element={<Test />} />
        <Route path="/items" element={<ItemList />} />
        <Route path="/battle" element={<Battle />} />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </>
  )
}

export default Game
