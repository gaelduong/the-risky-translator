import { useContext, useState } from 'react'
import { useEffect } from 'react'
import { Route, Routes } from 'react-router-dom'
import { AppContext } from '../../../context'
import { CityMapData } from '../../../data/cityMapData'
import { LocationData } from '../../../data/locationData'
import { getItemId } from '../../../functions/itemUtils'
import Item from '../../components/Item'

import CityMap from '../CityMap'
import Home from '../Home'
import Items from '../Items'
// import Map from '../Map'
import TranslationJob from '../TranslationJob'

const MapData = CityMapData.map(cityMap => ({
  ...cityMap,
  locations: cityMap.locationIds.map(locationId =>
    LocationData.find(location => location.id === locationId)
  )
}))

const Game = () => {
  const { state, dispatch } = useContext(AppContext)
  const [currentTimeInMs, setCurrentTimeInMs] = useState(Date.now())

  const items = state.items

  useEffect(() => {
    let interval = setInterval(() => {
      // console.log('test')
      setCurrentTimeInMs(Date.now())

      return () => clearInterval(interval)
    }, 1000)
  }, [])

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
      {items.map(item => (
        <Item
          key={getItemId(item)}
          item={item}
          currentTimeInMs={currentTimeInMs}
        />
      ))}

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
        <Route
          path="/items"
          element={<Items currentTimeInMs={currentTimeInMs} />}
        />
        {/* <Route path="/map" element={<Map />} /> */}
      </Routes>
    </>
  )
}

export default Game
