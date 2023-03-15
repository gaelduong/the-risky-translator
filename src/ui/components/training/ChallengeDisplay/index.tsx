import {
  getChallengeCurrentStatusDisplay,
  getCurrentChallenge
} from '@Function/challengeUtils'
import { useSelector } from 'react-redux'

interface ChallengeDisplayProps {
  locationId: number
}

const ChallengeDisplay = ({ locationId }: ChallengeDisplayProps) => {
  const { challenges } = useSelector((state: any) => state)
  const currentChallenge = getCurrentChallenge(locationId, challenges)

  return (
    currentChallenge && (
      <div className="mb-4">
        <div>
          <span
            className="inline-block bg-green-500 py-2 px-4 rounded-full
          text-white font-bold text-sm tracking-wider shadow-md"
            style={{ backgroundColor: currentChallenge.bgColor }}
          >
            <b>Level {currentChallenge.challengeLevel}</b>:{' '}
            {currentChallenge.challengeTitle}
          </span>
        </div>
        <div>
          <span className="text-green-700 font-bold tracking-widest">
            {getChallengeCurrentStatusDisplay(currentChallenge)}
          </span>
        </div>
      </div>
    )
  )
}

export default ChallengeDisplay
