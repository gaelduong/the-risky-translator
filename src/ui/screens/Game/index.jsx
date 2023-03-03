import { useEffect, useState } from 'react'
import { Route, Routes, useLocation } from 'react-router-dom'

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
import PreTraining from '@Screen/PreTraining'
import RecognizeMultipleChoice from '@Screen/Training/RecognizeMultipleChoice'
import RecognizeType from '@Screen/Training/RecognizeType'
import WordDetailView from '@Screen/WordDetailView'
import {
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
  bgImage5,
  bgImage6
} from '@Assets/images'

import * as images from '@Assets/images'
const imagePaths = Object.values(images)

function ImagePreloader({ children }) {
  const [isLoading, setIsLoading] = useState(true)

  useEffect(() => {
    const imagePaths = Object.values(images)
    let loadedImages = 0

    const preloadImage = image => {
      const img = new Image()
      img.onload = () => {
        loadedImages++
        if (loadedImages === imagePaths.length) {
          setIsLoading(false)
        }
      }
      img.src = image
    }

    imagePaths.forEach(image => {
      preloadImage(image)
    })
  }, [])

  return isLoading ? <p>Loading...</p> : <>{children}</>
}

const MapData = CityMapData.map(cityMap => ({
  ...cityMap,
  locations: cityMap.locationIds.map(locationId =>
    LocationData.find(location => location.id === locationId)
  )
}))

function CustomLayout({ children }) {
  const location = useLocation()

  const getBackgroundImage = path => {
    switch (location.pathname) {
      case '/':
        return `url(${bgImage3})`

      case '/loading':
        return `url(${bgImage3})`

      case '/name':
        return `url(${bgImage3})`

      case '/profile':
        return `url(${bgImage4})`

      case '/upgrade':
        return `url(${bgImage4})`

      case '/town':
        return `url(${bgImage6})`

      case '/monster-map':
        return `url(${bgImage5})`

      case '/recog-mc':
        return `url(${bgImage1})`

      case '/recog-type':
        return `url(${bgImage2})`

      default:
        return `url(${bgImage1})`
    }
  }
  const backgroundImage = getBackgroundImage(location.path)

  return (
    <div
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      {children}
    </div>
  )
}

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
      <ImagePreloader>
        <CustomLayout>
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
            <Route path="/" element={<LoadingApp />} />
            <Route path="/loading" element={<LoadingApp />} />
            <Route path="/story" element={<Story />} />
            <Route path="/name" element={<NameCreation />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/upgrade" element={<Upgrade />} />
            <Route path="/town" element={<Town />} />
            <Route path="/pre-training" element={<PreTraining />} />
            <Route path="/training" element={<Training />} />
            <Route path="/recog-mc" element={<RecognizeMultipleChoice />} />
            <Route path="/recog-type" element={<RecognizeType />} />
            <Route path="/word-list" element={<WordListView />} />
            <Route path="/word-list/:id" element={<WordDetailView />} />
            <Route path="/bigmixes" element={<BigMixes />} />
            <Route path="/megamixes" element={<MegaMixes />} />
            <Route path="/everything" element={<Everything />} />
            <Route path="/monster-map" element={<MonsterMap />} />
            <Route path="/battle" element={<Battle />} />
          </Routes>
        </CustomLayout>
      </ImagePreloader>
    </>
  )
}

export default Game
