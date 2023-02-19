import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import { checkLocationUnlocked } from '../../../functions/locationUtils'

import houseImg from '../../../assets/house.png'

const Location = ({ locationId, locationName, position, fromMapId }) => {
  const { state } = useContext(AppContext)
  const { x, y } = position

  const isUnlocked = checkLocationUnlocked(locationId, state)

  const locationDisplay = (
    <div style={{ top: y, left: x, position: 'absolute' }}>
      <img
        style={{
          width: 50,
          aspectRatio: 1 / 1,
          filter: isUnlocked ? '' : 'grayscale(100%)'
        }}
        src={houseImg}
        alt="location"
      />
      <div>{locationName}</div>
    </div>
  )

  if (!checkLocationUnlocked(locationId, state)) {
    return locationDisplay
  }

  return (
    <div>
      <Link to="/work" state={{ fromMapId, locationId }}>
        {locationDisplay}
      </Link>
    </div>
  )
}

export default Location
