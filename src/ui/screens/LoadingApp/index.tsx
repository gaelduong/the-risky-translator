import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'

import * as images from '@Assets/images'

const LoadingApp = () => {
  const [isLoading, setIsLoading] = useState(true)
  const navigate = useNavigate()

  useEffect(() => {
    if (!isLoading) {
      navigate('/name')
    }
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
