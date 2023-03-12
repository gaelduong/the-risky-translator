import { ReactNode } from 'react'
import { Route, Routes } from 'react-router-dom'

// Components
import Header from '@Com/Header'

// Screens
import Battle from '@Screen/Battle'
import Profile from '@Screen/Profile'
import Upgrade from '@Screen/Upgrade'
import Town from '@Screen/Town'
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
import RecognizeYesNo from '@Screen/Training/RecognizeYesNo'
import WordDetailView from '@Screen/WordDetailView'

// Assets
import {
  bgImage1,
  bgImage2,
  bgImage3,
  // bgImage4,
  bgImage4svg,
  bgImage5,
  // bgImage6,
  bgImage6svg
  // bgImage6
} from '@Asset/images'

import Board from '../../../game/Board'
import { useCurrentPath } from '@Hook/useCurrentPath'
import AudioMultipleChoice from '@Screen/Training/AudioMultipleChoice'

// import * as images from '@Asset/images'

// function ImagePreloader({ children }) {
//   const [isLoading, setIsLoading] = useState(true)

//   useEffect(() => {
//     const imagePaths = Object.values(images)
//     let loadedImages = 0

//     const preloadImage = image => {
//       const img = new Image()
//       img.onload = () => {
//         loadedImages++
//         if (loadedImages === imagePaths.length) {
//           setIsLoading(false)
//         }
//       }
//       img.src = image
//     }

//     imagePaths.forEach(image => {
//       preloadImage(image)
//     })
//   }, [])

//   return isLoading ? <p>Loading...</p> : <>{children}</>
// }

function CustomLayout({ children }: { children: ReactNode }) {
  const currentPath = useCurrentPath()

  const getBackgroundImage = (path: string) => {
    switch (path) {
      case '/':
        return `url(${bgImage3})`

      case '/loading':
        return `url(${bgImage3})`

      case '/name':
        return `url(${bgImage3})`

      case '/profile':
        return `url(${bgImage4svg})`

      case '/upgrade':
        return `url(${bgImage4svg})`

      case '/town/:id':
        return `url(${bgImage6svg})`

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
  const backgroundImage = getBackgroundImage(currentPath)

  return (
    <div
      style={{
        backgroundImage,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        minHeight: '100vh'
      }}
    >
      <div
        style={{
          position: 'absolute',
          background: 'rgba(255,255,255,0.12)',
          top: 0,
          left: 0,
          width: '100%',
          height: '100vh'
        }}
      >
        {children}
      </div>
    </div>
  )
}

const Game = () => {
  // const { vocabulary } = useSelector((state: any) => state.vocabulary)
  // const [audioObjects, setAudioObjects] = useState<any>([])

  // useEffect(() => {
  //   async function loadAudios() {
  //     const audioObject = await vocabulary.reduce(
  //       async (acc: Promise<any>, word: any) => {
  //         const resolvedAcc = await acc
  //         const audioFile = await import(
  //           `@Asset/audios/words/${getWordAudio(word)}`
  //         )
  //         const audio = new Audio(audioFile.default)
  //         audio.load()
  //         const wordId = getWordId(word)
  //         return { ...resolvedAcc, [wordId]: audio }
  //       },
  //       Promise.resolve({})
  //     )
  //     setAudioObjects(audioObject)
  //   }
  //   loadAudios()
  // }, [])

  // console.log(audioObjects)

  return (
    <>
      {/* <ImagePreloader> */}
      <CustomLayout>
        <Header />
        {/* {Object.keys(audioObjects).length} */}
        <Routes>
          <Route path="/" element={<LoadingApp />} />
          <Route path="/loading" element={<LoadingApp />} />
          <Route path="/story" element={<Story />} />
          <Route path="/name" element={<NameCreation />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/upgrade" element={<Upgrade />} />
          <Route path="/town/:townId" element={<Town />} />
          <Route path="/pre-training" element={<PreTraining />} />
          <Route path="/recog-yesno" element={<RecognizeYesNo />} />
          <Route path="/recog-mc" element={<RecognizeMultipleChoice />} />
          <Route path="/recog-type" element={<RecognizeType />} />
          <Route path="/recog-audio" element={<AudioMultipleChoice />} />
          <Route path="/word-list" element={<WordListView />} />
          <Route path="/word-list/:id" element={<WordDetailView />} />
          <Route path="/bigmixes" element={<BigMixes />} />
          <Route path="/megamixes" element={<MegaMixes />} />
          <Route path="/everything" element={<Everything />} />
          <Route path="/monster-map" element={<MonsterMap />} />
          <Route path="/battle" element={<Battle />} />
          <Route path="/game" element={<Board />} />
          <Route path="*" element={<Town />} />
        </Routes>
      </CustomLayout>
      {/* </ImagePreloader> */}
    </>
  )
}

export default Game
