import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context'
import {
  formatTime,
  getItemBuyRequirements,
  getItemDescription,
  getItemGeneration,
  getItemGenerationInProgress,
  getItemId,
  getItemIsBought,
  getItemName
} from '../../../functions/itemUtils'

const Item = ({ item, currentTimeInMs }) => {
  const { state, dispatch } = useContext(AppContext)
  const [itemIds, setItemIds] = useState([])

  const energy = state.energy

  const itemId = getItemId(item)
  const itemIsBought = getItemIsBought(item)
  const itemGeneration = getItemGeneration(item)
  const {
    energyRequired,
    moneyGenerated,
    timeRequiredInSeconds,
    times: { startTime, endTime }
  } = itemGeneration
  const itemGenerationInProgress = getItemGenerationInProgress(item)

  useEffect(() => {
    if (itemGenerationInProgress && currentTimeInMs >= endTime) {
      endGenerate(itemId, moneyGenerated)
    }
  }, [currentTimeInMs >= endTime])

  useEffect(() => {
    if (itemIsBought && !itemGenerationInProgress) {
      startGenerate(itemId, energyRequired)
    }
  }, [currentTimeInMs])

  const startGenerate = (itemId, energyRequired) => {
    // setItemIds(itemIds => )
    console.log('start generate')
    if (energy < energyRequired) {
      setItemIds([...itemIds, itemId])
      setTimeout(() => {
        setItemIds(itemIds => itemIds.filter(id => itemId !== id))
      }, 1000)
      return
    }
    dispatch({ type: 'UPDATE_ENERGY', payload: -energyRequired })
    dispatch({
      type: 'START_GENERATE',
      payload: { id: itemId, startTime: Date.now() }
    })
  }

  const endGenerate = (itemId, moneyGenerated) => {
    console.log('end generate')
    dispatch({
      type: 'END_GENERATE',
      payload: { id: itemId }
    })
    dispatch({ type: 'UPDATE_MONEY', payload: moneyGenerated })
  }

  return <></>
}

export default Item
