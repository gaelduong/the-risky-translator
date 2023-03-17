import { useState } from 'react'
import { useSelector } from 'react-redux'
import { Link, useParams } from 'react-router-dom'
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
import useClickSound from '@Hook/useClickSound'
import { pressSound } from '@Asset/audios'
import { ROUTE } from '@Route/index'

const Popup = ({
  customProps,
  onClose
}: {
  customProps: any
  onClose: any
}) => {
  const { location, townId } = customProps
  const locationId = getLocationId(location)

  useClickSound('data-press-sound')
  useClickSound('data-start-sound')

  return (
    <>
      <div className="absolute inset-0 bg-gray-900 opacity-50"></div>
      <div
        className="bg-[#f5fbfd] w-[70vw] max-w-[387px] min-w-[350px]
    fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2
    p-5 shadow-md rounded-lg text-center z-50"
      >
        {/* <h3 className="text-xl text-left font-semibold mb-6">
          {getLocationName(location)}
        </h3> */}
        <div>
          <Link to={ROUTE.WORD_LIST.path} state={{ location, townId }}>
            <button
              data-press-sound
              className="block w-max mr-auto mb-4 text-gray-600 hover:text-gray-800"
            >
              <span className="text-xs">►</span> View Word List
            </button>
          </Link>
        </div>
        {/* <div>
        <Link to="/recog-audio" state={{ locationId: locationId, townId }}>
          <u>View Challenges</u>
        </Link>
      </div> */}
        <p className="text-lg font-semibold mb-4"> Select a training type:</p>
        <div>
          <Link
            to={ROUTE.AUDIO_MC.path}
            state={{ locationId: locationId, townId }}
          >
            <button
              data-start-sound
              className="w-full py-2 mb-4 text-white font-semibold rounded-md bg-indigo-500 hover:bg-indigo-600"
            >
              Text Multiple Choice
            </button>
          </Link>
        </div>
        <div>
          <Link to="/recog-audio" state={{ locationId: locationId, townId }}>
            <button
              data-start-sound
              className="w-full py-2 mb-4 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600"
            >
              Audio Multiple Choice
            </button>
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
          <button
            data-press-sound
            className="block w-full py-2 text-gray-600 font-semibold rounded-md border border-gray-400 hover:text-gray-800 hover:border-gray-600"
            onClick={onClose}
          >
            Close
          </button>
        </div>
      </div>
    </>
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
    <div data-press-sound onClick={() => setShowPopup(true)}>
      <img className="w-[100px] aspect-square" src={image} alt="location" />
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
    <div className="flex justify-between w-[80%]">
      <Link to={ROUTE.PROFILE.path} state={{ townId }}>
        <div data-press-sound className="flex flex-col items-center">
          <img
            className="w-[7rem] object-contain"
            src={creature2Image}
            alt="creature2"
          />
          <span className="font-bold">{creature.name}</span>
        </div>
      </Link>{' '}
      <Link data-press-sound to={ROUTE.MONSTER_MAP.path} state={{ townId }}>
        <div className="flex flex-col items-center">
          <img
            className="w-[7rem] object-contain"
            src={monsterImage}
            alt="monster-map"
          />
          <span className="font-bold">Monsters</span>
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
    <div className="flex flex-col items-center">
      <TownHeader townId={townId} />
      {/* Arrows */}
      <div>
        {townId > 0 && (
          <Link to={`/town/${townId - 1}`}>
            <img
              onClick={() => new Audio(pressSound).play()}
              className="absolute top-[65vh] left-0"
              src={leftArrowImage}
              alt="left-arrow"
            />
          </Link>
        )}
        {townId < maxLocationPage && (
          <Link to={`/town/${townId + 1}`}>
            <img
              onClick={() => new Audio(pressSound).play()}
              className="absolute top-[65vh] right-0"
              src={rightArrowImage}
              alt="right-arrow"
            />
          </Link>
        )}
      </div>

      {/* Town Name */}
      <h2 className="text-2xl font-bold"> {getTownNameByTownId(townId)} </h2>

      {/* Locations Display */}
      <div className="grid grid-cols-3 sm:gap-6 gap-2">
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
