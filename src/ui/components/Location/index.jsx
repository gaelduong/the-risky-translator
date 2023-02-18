import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import { getRequiredMoneyForLocation } from '../../../data/items'

const Location = ({ locationId, locatioName, fromMapId }) => {
  const { state } = useContext(AppContext)

  if (getRequiredMoneyForLocation(locationId) > state.money) {
    return <div>{locatioName}</div>
  }

  return (
    <div>
      <Link to="/work" state={{ fromMapId, locationId }}>
        {locatioName}
      </Link>
    </div>
  )
}

export default Location
