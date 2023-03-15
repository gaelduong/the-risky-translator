import { coinImage, energyImage } from '@Asset/images'
import { ANSWER_RESULT } from '@Constant/index'

interface ResultDisplay {
  resultStatus: ANSWER_RESULT | null
  rewardAmountCorrect: any
  rewardAmountIncorrect: any
}

const ResultDisplay = ({
  resultStatus,
  rewardAmountCorrect,
  rewardAmountIncorrect
}: ResultDisplay) => {
  // If there's no result yet, display blank line
  if (resultStatus === null) {
    return <div className="h-[4.6rem] -my-[1.5rem]"></div>
  }

  // Get reward amounts
  const amountObj =
    resultStatus === ANSWER_RESULT.CORRECT
      ? rewardAmountCorrect
      : rewardAmountIncorrect

  const amountMoneyDisplay =
    amountObj.money > 0 ? `+${amountObj.money}` : amountObj.money
  const amountEnergyDisplay =
    amountObj.energy > 0 ? `+${amountObj.energy}` : amountObj.energy

  // Render result...
  return (
    <div className="flex justify-center items-center gap-2">
      {/* Display Correct or Incorrect text */}
      <span
        className={`text-xl font-bold ${
          resultStatus === ANSWER_RESULT.CORRECT
            ? 'text-green-500'
            : 'text-red-500'
        }`}
      >
        {resultStatus === ANSWER_RESULT.CORRECT ? 'Correct' : 'Incorrect'}
      </span>

      {/* Display reward */}
      <div className="flex flex-col gap-0">
        {amountObj.money !== 0 && (
          <div className="flex justify-center items-center gap-2">
            <span className="text-md font-semibold">{amountMoneyDisplay}</span>
            <img className="w-4" src={coinImage} alt="coin" />
          </div>
        )}
        {amountObj.energy !== 0 && (
          <div className="flex justify-center items-center gap-2">
            <span className="text-md font-semibold">{amountEnergyDisplay}</span>
            <img className="w-4" src={energyImage} alt="energy" />
          </div>
        )}
      </div>
    </div>
  )
}

export default ResultDisplay
