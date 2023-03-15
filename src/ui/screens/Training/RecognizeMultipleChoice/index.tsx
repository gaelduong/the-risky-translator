import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
  getRandomWordList,
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Function/wordUtils'
import { correctSound, wrongSound } from '@Asset/audios'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { Word } from '@Type/word'
import { shuffleArray } from '@Function/generalUtils'
import { getCurrentChallenge } from '@Function/challengeUtils'
import { updateChallenge } from '@Redux/slices/challengeSlice'
import { ANSWER_RESULT } from '@Constant/index'
import ChallengeDisplay from '@Com/training/ChallengeDisplay'
import CreatureDisplay from '@Com/training/CreatureDisplay'
import ResultDisplay from '@Com/training/ResultDisplay'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const mcSelectButtonStyle =
  'w-[9.7rem] h-auto min-h-[2.75rem] text-lg bg-indigo-500 text-white rounded-lg mb-4 shadow-lg'

const rewardAmountCorrect = {
  money: 1,
  energy: 0
}

const rewardAmountIncorrect = {
  money: -1,
  energy: 0
}

const RecognizeMultipleChoice = () => {
  const {
    state: { locationId, townId }
  } = useLocation()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)

  const wordListPool: Word[] = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  // Challenges
  const { challenges } = useSelector((state: any) => state)
  const currentChallenge = getCurrentChallenge(locationId, challenges)

  const dispatch = useDispatch()

  //   Word, choices, reveals
  const [totalAnswered, setTotalAnswered] = useState<number>(0)
  const [currentWord, setCurrentword] = useState(null)
  const [choices, setChoices] = useState<Word[]>([])
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)

  //   Results
  const [showResult, setShowResult] = useState(false)
  const [resultStatus, setResultStatus] = useState<ANSWER_RESULT | null>(null)

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  // Generate choices for a given word
  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(shuffleArray([currentWord, ...wrongChoices]))
    setResultStatus(null)
  }, [currentWord])

  useEffect(() => {
    setCurrentword(selectWord(wordListPool, totalAnswered))
  }, [totalAnswered])

  function checkAnswer(answer: string) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function submitAnswer(selectedAnswer: string, itemId: number) {
    if (checkAnswer(selectedAnswer)) {
      correctAudio.play()
      setResultStatus(ANSWER_RESULT.CORRECT)

      // Update challenge status
      if (!answerRevealed) {
        dispatch(
          updateChallenge({
            locationId,
            challenge: currentChallenge,
            answerResult: ANSWER_RESULT.CORRECT
          })
        )
      }

      setTimeout(() => {
        if (!answerRevealed) {
          dispatch(updateMoney({ amount: 1 }))
          dispatch(updateEnergy({ amount: 2 }))
          dispatch(
            updateWordStats({
              id: itemId,
              log: { timestamp: Date.now(), result: 'CORRECT' }
            })
          )
        }
        setShowResult(false)
        setTotalAnswered(totalAnswered => totalAnswered + 1)
      }, 1000)
    } else {
      wrongAudio.play()
      setResultStatus(ANSWER_RESULT.INCORRECT)
      setTimeout(() => {
        dispatch(updateMoney({ amount: -1 }))
        dispatch(updateEnergy({ amount: 0 }))
        dispatch(
          updateWordStats({
            id: itemId,
            log: { timestamp: Date.now(), result: 'INCORRECT' }
          })
        )

        // Update challenge status
        dispatch(
          updateChallenge({
            locationId,
            challenge: currentChallenge,
            answerResult: ANSWER_RESULT.INCORRECT
          })
        )

        setShowResult(false)
        setTotalAnswered(totalAnswered => totalAnswered + 1)
      }, 1000)
    }
    setAnswerRevealed(false)
    setShowResult(true)
  }

  const handleRevealAnswer = (itemId: number) => {
    setAnswerRevealed(true)
    // dispatch(
    //   updateWordStats({
    //     id: itemId,
    //     log: { timestamp: Date.now(), result: 'REVEAL' }
    //   })
    // )
  }

  return (
    <>
      {/* Back Icon */}
      <CustomBackIcon
        linkTo={`/town/${townId}`}
        popup={{
          prompt: 'Are you sure you want to leave your training?',
          yesText: 'Leave',
          noText: 'Stay'
        }}
      />

      {/* Creature Image */}
      <CreatureDisplay />

      {/* Challenge Display */}
      <ChallengeDisplay locationId={locationId} />

      <ResultDisplay
        resultStatus={resultStatus}
        rewardAmountCorrect={rewardAmountCorrect}
        rewardAmountIncorrect={rewardAmountIncorrect}
      />

      {/* Current word */}
      <h2 className="text-3xl font-bold mb-4">{wordText}</h2>

      {/* Display Choices */}
      {choices.map(choice => (
        <div key={getWordId(choice)}>
          <button
            className={`${mcSelectButtonStyle} ${
              showResult
                ? wordMeaning === getWordMeaning(choice)
                  ? 'bg-green-300 text-white'
                  : 'bg-red-600 text-white'
                : ''
            }`}
            disabled={showResult}
            onClick={() => submitAnswer(getWordMeaning(choice), wordId)}
          >
            {getWordMeaning(choice)}
          </button>
        </div>
      ))}

      {/* Reveal */}
      <div>
        <span
          className="text-lg mt-4"
          onClick={() => handleRevealAnswer(getWordId(currentWord))}
        >
          <u>reveal</u>
        </span>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
      </div>
    </>
  )
}

export default RecognizeMultipleChoice
