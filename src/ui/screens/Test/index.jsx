import { useState, useEffect, useCallback } from 'react'

function Building({ name, timeBetweenCollections, moneyPerCollection }) {
  const [moneyGenerated, setMoneyGenerated] = useState(0)
  const [timeRemaining, setTimeRemaining] = useState(timeBetweenCollections)
  // at the beginning, collection time = the time you start the collection for the first time
  const [lastCollectionTime, setLastCollectionTime] = useState(Date.now())
  const [progress, setProgress] = useState(0)
  const [energy, setEnergy] = useState(100)

  // Save
  const saveGameState = useCallback(() => {
    const gameState = {
      moneyGenerated,
      lastCollectionTime,
      energy
    }
    localStorage.setItem(name, JSON.stringify(gameState))
  }, [name, energy, moneyGenerated, lastCollectionTime])

  // Load
  const loadGameState = useCallback(() => {
    const savedGameState = localStorage.getItem(name)
    if (savedGameState) {
      const gameState = JSON.parse(savedGameState)
      setMoneyGenerated(gameState.moneyGenerated)
      setLastCollectionTime(gameState.lastCollectionTime)
      setEnergy(gameState.energy)
    }
  }, [name])

  useEffect(() => {
    loadGameState()
  }, [loadGameState])

  useEffect(() => {
    const interval = setInterval(() => {
      if (energy <= 0) {
        clearInterval(interval)
        saveGameState()
        return
      }
      const currentTime = Date.now()
      const timeElapsed = currentTime - lastCollectionTime
      const collectionsToPerform = Math.min(
        Math.floor(timeElapsed / (timeBetweenCollections * 1000)),
        energy
      )

      setEnergy(energy - collectionsToPerform)

      setMoneyGenerated(
        moneyGenerated + collectionsToPerform * moneyPerCollection
      )
      setLastCollectionTime(
        lastCollectionTime +
          collectionsToPerform * timeBetweenCollections * 1000
      )
      saveGameState()

      const timeRemainingInSeconds =
        timeBetweenCollections -
        (timeElapsed % (timeBetweenCollections * 1000)) / 1000

      setTimeRemaining(timeRemainingInSeconds)
      setProgress((1 - timeRemainingInSeconds / timeBetweenCollections) * 100)
    }, 1000)

    return () => clearInterval(interval)
  }, [
    moneyGenerated,
    timeRemaining,
    lastCollectionTime,
    timeBetweenCollections,
    moneyPerCollection,
    saveGameState,
    energy
  ])

  return (
    <div>
      <h2>{name}</h2>
      <p>Money generated: {moneyGenerated}</p>
      <p>Time remaining: {Math.floor(timeRemaining)}</p>
      <p>Energy: {energy}</p>
      <div style={{ width: '100%', height: '20px', backgroundColor: '#ddd' }}>
        <div
          style={{
            width: `${progress}%`,
            height: '100%',
            backgroundColor: '#007aff'
          }}
        ></div>
      </div>
    </div>
  )
}

function Test() {
  const buildings = [
    { name: 'Building 1', moneyPerCollection: 1, timeBetweenCollections: 10 }
    // { name: 'Building 2', moneyPerCollection: 1, timeBetweenCollections: 20 },
    // { name: 'Building 3', moneyPerCollection: 1, timeBetweenCollections: 30 },
    // { name: 'Building 4', moneyPerCollection: 1, timeBetweenCollections: 300 },
    // { name: 'Building 5', moneyPerCollection: 1, timeBetweenCollections: 1000 },
    // {
    //   name: 'Building 6',
    //   moneyPerCollection: 1,
    //   timeBetweenCollections: 2630000
    // },
    // {
    //   name: 'Building 7',
    //   moneyPerCollection: 1,
    //   timeBetweenCollections: 1577847600
    // }
  ]

  return (
    <div>
      {buildings.map((building, index) => (
        <Building key={index} {...building} />
      ))}
    </div>
  )
}

export default Test
