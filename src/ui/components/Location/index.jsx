import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import { checkLocationUnlocked } from '../../../functions/locationUtils'

const Location = ({ locationId, locationName, position, image, fromMapId }) => {
  const { state } = useContext(AppContext)
  //   const { x, y } = position

  const isUnlocked = checkLocationUnlocked(locationId, state)

  const locationDisplay = (
    <div>
      <img
        style={{
          width: 100,
          aspectRatio: 1 / 1
          //   filter: isUnlocked ? '' : 'grayscale(100%)'
        }}
        src={image}
        alt="location"
      />
      <div>{locationName}</div>
    </div>
  )

  return false && !isUnlocked ? (
    locationDisplay
  ) : (
    <div>
      <Link
        to="/work"
        state={{ fromMapId, locationId, workType: 'recog_multiple_choice' }}
      >
        {locationDisplay}
      </Link>
    </div>
  )
}

export default Location
