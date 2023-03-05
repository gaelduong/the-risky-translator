import { LocationData } from '@Data/locationData'
import {
  getLocationId,
  getLocationImage,
  getLocationName
} from '@Functions/locationUtils'
import { useState } from 'react'
import { Link } from 'react-router-dom'

const Popup = ({
  customProps,
  onClose
}: {
  customProps: any
  onClose: any
}) => {
  const { location } = customProps
  const locationId = getLocationId(location)

  return (
    <div className="popup">
      <div>
        <Link to="/word-list" state={{ location }}>
          <button>View Word List</button>
        </Link>
      </div>
      <hr />
      <p> Or, select a training type:</p>
      <div>
        <Link to="/recog-type">
          <button>Typing</button>
        </Link>
      </div>
      <div>
        <Link to="/recog-mc" state={{ locationId: locationId }}>
          <button>Multiple Choice</button>
        </Link>
      </div>
      <div>
        <Link to="/recog-yesno" state={{ locationId: locationId }}>
          <button>Yes/No</button>
        </Link>
      </div>
      <div>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

const Location = ({ location }: { location: any }) => {
  const [showPopup, setShowPopup] = useState(false)

  const locationName = getLocationName(location)
  const image = getLocationImage(location)

  const handleClose = () => {
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

  return (
    <div>
      {showPopup && <Popup customProps={{ location }} onClose={handleClose} />}
      {locationDisplay}
    </div>
  )
}

const Town = () => {
  return (
    <div>
      <h2> Town </h2>
      <Link to="/profile">Profile</Link>{' '}
      <Link to="/monster-map">MonsterMap</Link>
      <hr />
      <div className="d-flex flex-wrap justify-center">
        {LocationData.map(location => {
          return <Location key={getLocationId(location)} location={location} />
        })}
      </div>
    </div>
  )
}

export default Town
