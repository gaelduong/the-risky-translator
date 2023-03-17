import { ReactNode, Suspense } from 'react'

// Routes
import { Route, Routes } from 'react-router-dom'
import { ROUTE } from '@Route/index'

// Components
import Header from '@Com/shared/Header'

// Assets
import {
  bgImage1,
  bgImage2,
  bgImage3,
  bgImage4svg,
  bgImage5,
  bgImage6svg
  // bgImage4,
  // bgImage6,
  // bgImage6
} from '@Asset/images'

// Hooks
import { useCurrentPath } from '@Hook/useCurrentPath'
import useClickSound from '@Hook/useClickSound'

function CustomLayout({ children }: { children: ReactNode }) {
  const currentPath = useCurrentPath()

  const getBackgroundImage = (path: string) => {
    switch (path) {
      case ROUTE.DEFAULT.path:
        return `url(${bgImage3})`

      case ROUTE.LOADING.path:
        return `url(${bgImage3})`

      case ROUTE.NAME.path:
        return `url(${bgImage3})`

      case ROUTE.PROFILE.path:
        return `url(${bgImage4svg})`

      case ROUTE.UPGRADE.path:
        return `url(${bgImage4svg})`

      case ROUTE.TOWN.path:
        return `url(${bgImage6svg})`

      case ROUTE.MONSTER_MAP.path:
        return `url(${bgImage5})`

      case ROUTE.TEXT_MC.path:
        return `url(${bgImage1})`

      case ROUTE.TEXT_TYPE.path:
        return `url(${bgImage2})`

      default:
        return `url(${bgImage6svg})`
    }
  }
  const backgroundImage = getBackgroundImage(currentPath)

  return (
    <div
      className="bg-cover bg-center min-h-screen"
      style={{ backgroundImage }}
    >
      <div className="absolute bg-[#ffffff1f] top-0 left-0 w-full h-screen">
        {children}
      </div>
    </div>
  )
}

const Game = () => {
  useClickSound('data-press-sound')
  useClickSound('data-attack-sound')
  useClickSound('data-start-sound')

  return (
    <>
      <CustomLayout>
        <Header />
        <Suspense fallback={<div>Loading...</div>}>
          <Routes>
            {Object.values(ROUTE).map(route => (
              <Route
                key={route.path}
                path={route.path}
                element={<route.component />}
              />
            ))}
          </Routes>
        </Suspense>
      </CustomLayout>
    </>
  )
}

export default Game
