import { Route, Routes } from 'react-router-dom'

// Data
import { CityMapData } from '@Data/cityMapData'
import { LocationData } from '@Data/locationData'

// Components
import Header from '@Com/Header'

// Screens
import Battle from '@Screen/Battle'
import CityMap from '@Screen/CityMap'
import TranslationJob from '@Screen/TranslationJob'
import Profile from '@Screen/Profile'
import Upgrade from '@Screen/Upgrade'
import Town from '@Screen/Town'
import Training from '@Screen/Training'
import Story from '@Screen/Story'
import NameCreation from '@Screen/NameCreation'
import WordListView from '@Screen/WordListView'
import BigMixes from '@Screen/BigMixes'
import MegaMixes from '@Screen/MegaMixes'
import LoadingApp from '@Screen/LoadingApp'
import Everything from '@Screen/Everything'
import MonsterMap from '@Screen/MonsterMap'

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
    <>
      <Header />
      <Routes>
        {cityMapList.map(cityMap => (
          <Route
            key={cityMap.props.route}
            path={cityMap.props.route}
            element={cityMap}
          />
        ))}
        <Route path="/work" element={<TranslationJob />} />

        {/* New */}
        <Route path="/loading" element={<LoadingApp />} />
        <Route path="/story" element={<Story />} />
        <Route path="/name" element={<NameCreation />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/upgrade" element={<Upgrade />} />
        <Route path="/town" element={<Town />} />
        <Route path="/training" element={<Training />} />
        <Route path="/word-list" element={<WordListView />} />
        <Route path="/bigmixes" element={<BigMixes />} />
        <Route path="/megamixes" element={<MegaMixes />} />
        <Route path="/everything" element={<Everything />} />
        <Route path="/monster-map" element={<MonsterMap />} />
        <Route path="/battle" element={<Battle />} />
      </Routes>
    </>
  )
}

export default Game
