import { useContext, useRef } from 'react'
import { useEffect } from 'react'
import { AppContext } from '../context'

export const useUpdateItems = () => {
  const { state, dispatch } = useContext(AppContext)
  const stateRef = useRef(state)

  useEffect(() => {
    stateRef.current = state
  }, [state.items, state.energy])

  useEffect(() => {
    const intervals = []
    stateRef.current.items.forEach((_, idx) => {
      let interval = setInterval(() => {
        const currentItem = stateRef.current.items[idx]
        const {
          generate: {
            timeBetweenCollections,
            moneyPerCollection,
            lastCollectionTime,
            moneyGenerated,
            energyRequiredPerCollection
          }
        } = currentItem

        if (lastCollectionTime === null) return

        console.log(stateRef.current.energy)
        if (stateRef.current.energy <= 0) {
          console.log('out of energy')
          //   clearInterval(interval)
          return
        }

        const currentTime = Date.now()
        const timeElapsed = currentTime - lastCollectionTime
        const collectionsToPerform = Math.min(
          Math.floor(timeElapsed / (timeBetweenCollections * 1000)),
          stateRef.current.energy
        )

        dispatch({ type: 'UPDATE_ENERGY', payload: -collectionsToPerform })

        const moneyGeneratedDuringElapsedTime =
          collectionsToPerform * moneyPerCollection

        const updatedMoneyGenerated =
          moneyGenerated + moneyGeneratedDuringElapsedTime

        const updatedLastCollectionTime =
          lastCollectionTime +
          collectionsToPerform * timeBetweenCollections * 1000

        const updatedTimeRemainingInSeconds =
          timeBetweenCollections -
          (timeElapsed % (timeBetweenCollections * 1000)) / 1000

        const updatedProgress =
          1 - updatedTimeRemainingInSeconds / timeBetweenCollections

        const payload = {
          id: currentItem.id,
          collectionData: {
            moneyGenerated: updatedMoneyGenerated,
            lastCollectionTime: updatedLastCollectionTime,
            timeRemainingInSeconds: updatedTimeRemainingInSeconds,
            progress: updatedProgress
          }
        }

        dispatch({
          type: 'UPDATE_MONEY',
          payload: moneyGeneratedDuringElapsedTime
        })
        dispatch({ type: 'UPDATE_ITEMS', payload })
      }, 60)

      intervals.push(interval)
    })
    return () => {
      console.log('Intervals cleared...')
      intervals.forEach(interval => clearInterval(interval))
    }
  }, [])
}
