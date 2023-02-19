import React, { useContext } from 'react'
import { AppContext } from '../../../context'

const Header = () => {
  const { state } = useContext(AppContext)

  const displayMoney =
    state.money < 0 ? `-$${state.money * -1}` : `$${state.money}`

  return (
    <div style={{ paddingTop: 'env(safe-area-inset-top)' }}>
      Money: {displayMoney}
    </div>
  )
}

export default Header
