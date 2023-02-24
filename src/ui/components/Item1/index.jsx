import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context'
import {
  formatNumberWithCommas,
  formatTime,
  getItemBuyRequirements,
  getItemDescription,
  getItemGeneration,
  getItemGenerationInProgress,
  getItemId,
  getItemIsBought,
  getItemName
} from '../../../functions/itemUtils'
import ProgressBar from '../ProgressBar'

const Item1 = ({ item, currentTimeInMs }) => {
  const { state, dispatch } = useContext(AppContext)
  const [itemIds, setItemIds] = useState([])
  // const [currentTimeInMs, setCurrentTimeInMs] = useState(Date.now())

  const money = state.money
  const energy = state.energy

  const itemId = getItemId(item)
  const itemName = getItemName(item)
  const itemBuyRequirements = getItemBuyRequirements(item)
  const itemIsBought = getItemIsBought(item)
  const itemGeneration = getItemGeneration(item)
  const {
    moneyGenerated,
    timeRequiredInSeconds,
    times: { startTime, endTime }
  } = itemGeneration
  const itemGenerationInProgress = getItemGenerationInProgress(item)
  const itemDescription = `${getItemDescription(item)}, Time: ${formatTime(
    timeRequiredInSeconds
  )}`

  // useEffect(() => {
  //   let interval = setInterval(() => {
  //     console.log('tick')
  //     setCurrentTimeInMs(Date.now())

  //     return () => clearInterval(interval)
  //   }, 1000)
  // }, [])

  const buyItem = (id, cost) => {
    dispatch({ type: 'BUY_ITEM', payload: id })
    dispatch({ type: 'UPDATE_MONEY', payload: -cost })
  }

  // const startGenerate = (itemId, energyRequired) => {
  //   // setItemIds(itemIds => )
  //   console.log('start generate')
  //   if (energy < energyRequired) {
  //     setItemIds([...itemIds, itemId])
  //     setTimeout(() => {
  //       setItemIds(itemIds => itemIds.filter(id => itemId !== id))
  //     }, 1000)
  //     return
  //   }
  //   dispatch({ type: 'UPDATE_ENERGY', payload: -energyRequired })
  //   dispatch({
  //     type: 'START_GENERATE',
  //     payload: { id: itemId, startTime: Date.now() }
  //   })
  // }

  const status = (() => {
    if (!itemIsBought) return 'not_bought'
    if (itemGenerationInProgress && currentTimeInMs < endTime)
      return 'generate_in_progress'

    return 'generate_ready'
  })()

  //   Show Buy button
  const buyButton = (
    <button
      className="button1"
      onClick={() => buyItem(itemId, itemBuyRequirements.money)}
      disabled={money < itemBuyRequirements.money}
    >
      Buy ${formatNumberWithCommas(itemBuyRequirements.money)}
    </button>
  )

  //   Show button generate
  // const generateButton = (
  //   <>
  //     <button
  //       onClick={() => startGenerate(itemId, itemGeneration.energyRequired)}
  //     >
  //       +$ {itemGeneration.moneyGenerated}
  //     </button>
  //     {itemIds.includes(itemId) && (
  //       <div style={{ color: 'orange' }}>Not enough energy!</div>
  //     )}
  //   </>
  // )

  //   Component showing remaining time
  const generateInProgress = (
    <div>
      {formatTime(Math.floor((endTime - currentTimeInMs) / 1000))}
      <ProgressBar start={startTime} end={endTime} current={currentTimeInMs} />
    </div>
  )

  return (
    <div key={itemId}>
      <h3>{itemName} </h3>
      <div>{itemDescription}</div>

      {status === 'not_bought' && buyButton}
      {/* {status === 'generate_ready' && generateButton} */}
      {status === 'generate_in_progress' && generateInProgress}
    </div>
  )
}

export default Item1
