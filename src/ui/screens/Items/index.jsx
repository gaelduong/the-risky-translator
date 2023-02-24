import React, { useEffect } from 'react'
import { useState } from 'react'
import { useContext } from 'react'
import { AppContext } from '../../../context'
import { getItemId } from '../../../functions/itemUtils'

import Header from '../../components/Header'
import Item from '../../components/Item'
import Item1 from '../../components/Item1'

const Items = () => {
  const { state } = useContext(AppContext)
  const items = state.items

  const [currentTimeInMs, setCurrentTimeInMs] = useState(Date.now())

  useEffect(() => {
    let interval = setInterval(() => {
      console.log('tick')
      setCurrentTimeInMs(Date.now())
    }, 1000)
    return () => clearInterval(interval)
  }, [])

  return (
    <div>
      <Header />

      {/* Items */}
      {items.map(item => (
        <Item1
          key={getItemId(item)}
          item={item}
          currentTimeInMs={currentTimeInMs}
        />
      ))}
    </div>
  )
}

export default Items
