import {
  creature2Image,
  leftArrowImage,
  monsterImage,
  rightArrowImage
} from '@Asset/images'
import { LocationData } from '@Data/locationData'
import { getChallengesCompleted } from '@Function/challengeUtils'
import {
  getLocationId,
  getLocationImage,
  getLocationName,
  getLocationsByTownId,
  getMaxLocationPage,
  getTownNameByTownId
} from '@Function/locationUtils'
import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'

const Popup = ({
  customProps,
  onClose
}: {
  customProps: any
  onClose: any
}) => {
  const { location, townId } = customProps
  const locationId = getLocationId(location)

  return (
    <div className="popup">
      <h3>{getLocationName(location)}</h3>

      <div>
        <Link to="/word-list" state={{ location, townId }}>
          <button>View Word List</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/recog-audio" state={{ locationId: locationId, townId }}>
          <u>View Challenges</u>
        </Link>
      </div> */}
      <hr />
      <p> Or, select a training type:</p>
      <div>
        <Link to="/recog-mc" state={{ locationId: locationId, townId }}>
          <button>Text Multiple Choice</button>
        </Link>
      </div>
      <div>
        <Link to="/recog-audio" state={{ locationId: locationId, townId }}>
          <button>Audio Multiple Choice</button>
        </Link>
      </div>
      {/* <div>
        <Link to="/recog-audio-type" state={{ locationId: locationId, townId }}>
          <button>Audio Typing</button>
        </Link>
      </div>
      <div>
        <Link to="/recog-type" state={{ locationId: locationId, townId }}>
          <button>Typing</button>
        </Link>
      </div>
      <div>
        <Link to="/recog-yesno" state={{ locationId: locationId, townId }}>
          <button>Yes/No</button>
        </Link>
      </div> */}
      <div>
        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    </div>
  )
}

const Location = ({
  location,
  townId,
  challengeCompletedInfo
}: {
  location: any
  townId: number
  challengeCompletedInfo: any
}) => {
  const [showPopup, setShowPopup] = useState(false)

  const locationName = getLocationName(location)
  const image = getLocationImage(location)

  const handleClose = () => {
    setShowPopup(false)
  }

  const locationDisplay = (
    <div className="location" onClick={() => setShowPopup(true)}>
      <img
        style={{
          width: 100,
          aspectRatio: 1 / 1
          //   filter: isUnlocked ? '' : 'grayscale(100%)'
        }}
        src={image}
        alt="location"
      />
      <div>
        <b>{locationName}</b>
      </div>
      <div>
        Lv: {challengeCompletedInfo.numCompleted}/{challengeCompletedInfo.total}
      </div>
    </div>
  )

  return (
    <div>
      {showPopup && (
        <Popup customProps={{ location, townId }} onClose={handleClose} />
      )}
      {locationDisplay}
    </div>
  )
}

const TownHeader = ({ townId }: { townId: number }) => {
  const { creature } = useSelector((state: any) => state)
  return (
    <div className="town-header">
      <Link to="/profile" state={{ townId }}>
        <div className="d-flex d-col items-center">
          <img className="icon-map" src={creature2Image} alt="creature2" />
          <span>{creature.name}</span>
        </div>
      </Link>{' '}
      <Link to="/monster-map" state={{ townId }}>
        <div className="d-flex d-col items-center">
          <img className="icon-map" src={monsterImage} alt="monster-map" />
          <span>Monsters</span>
        </div>
      </Link>
    </div>
  )
}

const Town = () => {
  const params = useParams()
  const townId = parseInt(params.townId || '0')

  const locations = getLocationsByTownId(townId, LocationData)
  const maxLocationPage = getMaxLocationPage(LocationData)

  const { challenges } = useSelector((state: any) => state)

  return (
    <div className="d-flex d-col items-center">
      <TownHeader townId={townId} />
      {/* Arrows */}
      <div>
        {townId > 0 && (
          <Link to={`/town/${townId - 1}`}>
            <img
              className="arrow left-arrow"
              src={leftArrowImage}
              alt="left-arrow"
            />
          </Link>
        )}
        {townId < maxLocationPage && (
          <Link to={`/town/${townId + 1}`}>
            <img
              className="arrow right-arrow"
              src={rightArrowImage}
              alt="right-arrow"
            />
          </Link>
        )}
      </div>

      {/* Town Name */}
      <h2> {getTownNameByTownId(townId)} </h2>

      {/* Locations Display */}
      <div className="d-grid-3 flex-wrap justify-center">
        {locations.map(location => {
          const challengeCompletedInfo = getChallengesCompleted(
            getLocationId(location),
            challenges
          )
          return (
            <Location
              key={getLocationId(location)}
              location={location}
              townId={townId}
              challengeCompletedInfo={challengeCompletedInfo}
            />
          )
        })}
      </div>
    </div>
  )
}

export default Town
