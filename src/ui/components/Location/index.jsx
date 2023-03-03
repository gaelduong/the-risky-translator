import { useState } from 'react'
import { useSelector } from 'react-redux'
// import { Link } from 'react-router-dom'

// Components
import Popup from '@Com/Popup'

// Functions
import { checkLocationUnlocked } from '@Functions/locationUtils'

const Location = ({ locationId, locationName, position, image, fromMapId }) => {
  //   const { x, y } = position
  const state = useSelector(currState => currState)
  const isUnlocked = checkLocationUnlocked(locationId, state)
  const [showPopup, setShowPopup] = useState(false)

  const handleClose = () => {
    console.log('Here')
    setShowPopup(false)
  }

  const locationDisplay = (
    <div onClick={() => setShowPopup(true)}>
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
      {showPopup && (
        <Popup
          fromMapId={fromMapId}
          locationId={locationId}
          onClose={handleClose}
        />
      )}
      {/* <Link
        to="/work"
        state={{ fromMapId, locationId, jobType: 'recog_multiple_choice' }}
      > */}
      {locationDisplay}
      {/* </Link> */}
    </div>
  )
}

export default Location
