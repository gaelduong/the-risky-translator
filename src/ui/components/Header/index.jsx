import React, { useContext } from 'react'
import { AppContext } from '../../../context'

const Header = () => {
  const { state } = useContext(AppContext)

  if (state.money < 0) return <div> Money: -${state.money * -1}</div>

  return <div> Money: ${state.money}</div>
}

export default Header
