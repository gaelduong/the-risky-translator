import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import { LOCATIONS } from '../../../data/locations'

const Location = ({ indices, locationId, name, fromMapId, currentMoney }) => {
  const { state } = useContext(AppContext)

  if (LOCATIONS[locationId].requiredMoney > state.money.money) {
    return <div>{name}</div>
  }
  return (
    <div>
      <Link to="/work" state={{ fromMapId, indices }}>
        {name}
      </Link>
    </div>
  )
}

export default Location
