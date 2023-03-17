import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useSelector } from 'react-redux'

import * as images from '@Asset/images'
import { ROUTE } from '@Route/index'

const LoadingApp = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  const { creature } = useSelector((state: any) => state)

  const pathToNavigate = creature.name !== null ? '/town' : ROUTE.NAME.path

  useEffect(() => {
    if (!isLoading) {
      navigate(pathToNavigate)
    }

    let timeout = setTimeout(() => {
      navigate(pathToNavigate)
    }, 15000)

    return () => clearTimeout(timeout)
  }, [isLoading, navigate])

  useEffect(() => {
    const imagePaths = Object.values(images)
    let loadedImages = 0

    const preloadImage = (image: any) => {
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

  return (
    <div>
      <h2>App Name</h2>
      <p>Loading...</p>
    </div>
  )
}

export default LoadingApp
