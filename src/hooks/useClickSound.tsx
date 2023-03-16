import { attackSound, pressSound, startSound } from '@Asset/audios'
import { useState, useLayoutEffect } from 'react'
import { useLocation } from 'react-router-dom'

enum Sound {
  PRESS = 'press',
  START = 'start'
}

const dataAttributeSoundMap: any = {
  'data-press-sound': pressSound,
  'data-start-sound': startSound,
  'data-attack-sound': attackSound
}

const useClickSound = (dataAttribute: string, dependency?: any) => {
  const location = useLocation()
  const [audio] = useState(new Audio(''))

  useLayoutEffect(() => {
    const handleClick = () => {
      if (!dataAttributeSoundMap.hasOwnProperty(dataAttribute)) return

      audio.src = dataAttributeSoundMap[dataAttribute]
      audio.currentTime = 0
      audio.play()
    }

    const elements = document.querySelectorAll(`[${dataAttribute}]`)

    elements.forEach(el => {
      el.addEventListener('click', handleClick)
    })

    return () => {
      elements.forEach(el => {
        el.removeEventListener('click', handleClick)
      })
    }
  }, [audio, location, dependency])

  return (element: any) => {
    element.setAttribute(dataAttribute, true)
  }
}

export default useClickSound
