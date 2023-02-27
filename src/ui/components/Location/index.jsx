import { useContext, useState } from 'react'
// import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import { checkLocationUnlocked } from '../../../functions/locationUtils'
import Popup from '../Popup'

const Location = ({ locationId, locationName, position, image, fromMapId }) => {
  const { state } = useContext(AppContext)
  //   const { x, y } = position

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
