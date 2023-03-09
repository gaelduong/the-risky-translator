// import { useEffect, useState } from 'react'
import { matchRoutes, Route, Routes, useLocation } from 'react-router-dom'

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
import WordDetailView from '@Screen/WordDetailView'
import {
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4,
  bgImage5,
  bgImage6
  // bgImage6
} from '@Assets/images'
import RecognizeYesNo from '@Screen/Training/RecognizeYesNo'
import Board from '../../../game/Board'
import { ReactNode } from 'react'

// // Initialize the S3 client with the desired region
// const s3 = new AWS.S3({
//   region: 'us-east-2'
// })

// // Define the object key and expiration time for the pre-signed URL
// const objectKey = 'example-object-key'
// const expirationTime = 3600 // 1 hour

// // Generate the pre-signed URL for uploading the file
// const params = {
//   Bucket: 'presigned-test-gael',
//   Key: objectKey,
//   ContentType: 'text/plain', // Replace with the desired content type of the file
//   Expires: expirationTime,
//   ACL: 'public-read' // Replace with the desired access control list for the object
// }
// const uploadUrl = s3.getSignedUrl('putObject', params)

// console.log(uploadUrl)

// import * as images from '@Assets/images'

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

const useCurrentPath = () => {
  // town routes
  const routes = [{ path: '/town/:id' }]

  const location = useLocation()
  const result = matchRoutes(routes, location)
  if (!result) return location.pathname

  const [{ route }] = result
  return route.path
}

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
        return `url(${bgImage4})`

      case '/upgrade':
        return `url(${bgImage4})`

      case '/town/:id':
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
      {children}
    </div>
  )
}

const Game = () => {
  return (
    <>
      {/* <ImagePreloader> */}
      <CustomLayout>
        <Header />
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
