import { useState, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
  getRandomWordList,
  getWordAudio,
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Function/wordUtils'
import { correctSound, wrongSound } from '@Asset/audios'
import { speakerImage } from '@Asset/images'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { Word } from '@Type/word'
import { shuffleArray } from '@Function/generalUtils'
import { ANSWER_RESULT, S3_BASE_AUDIO_URL } from '@Constant/index'

import { getCurrentChallenge } from '@Function/challengeUtils'
import { resetChallenge, updateChallenge } from '@Redux/slices/challengeSlice'
import ChallengeDisplay from '@Com/training/ChallengeDisplay'
import CreatureDisplay from '@Com/training/CreatureDisplay'
import ResultDisplay from '@Com/training/ResultDisplay'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const mcSelectButtonStyle =
  'w-[9.7rem] h-auto min-h-[2.75rem] text-lg bg-indigo-500 text-white rounded-lg mb-4 shadow-lg'

const rewardAmountCorrect = {
  money: 2,
  energy: 1
}

const rewardAmountIncorrect = {
  money: -1,
  energy: -1
}

const AudioMultipleChoice = () => {
  const {
    state: { locationId, townId }
  } = useLocation()

  const speakerRef = useRef<any>(null)

  const { vocabulary } = useSelector((state: any) => state.vocabulary)

  // Word List Pool
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
  const [currentWord, setCurrentword] = useState<Word | null>(null)
  const [choices, setChoices] = useState<Word[]>([])
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)

  //   Results
  const [showResult, setShowResult] = useState(false)
  const [resultStatus, setResultStatus] = useState<ANSWER_RESULT | null>(null)

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)
  const wordAudio = getWordAudio(currentWord)

  useEffect(() => {
    dispatch(resetChallenge({ locationId, challenge: currentChallenge }))
  }, [])

  // Generate choices for a given word
  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(shuffleArray([currentWord, ...wrongChoices]))
    setResultStatus(null)
  }, [currentWord])

  useEffect(() => {
    const selectedWord = selectWord(wordListPool, totalAnswered)
    setCurrentword(selectedWord)

    // playAudio(getWordAudio(selectedWord))
    setTimeout(() => {
      if (speakerRef.current !== null) {
        speakerRef.current.click()
      }
    }, 200)
  }, [totalAnswered])

  const playAudio = async (audio: any) => {
    const audioToPlay = new Audio(`${S3_BASE_AUDIO_URL}/${audio}`)
    audioToPlay.play()
  }

  const generateTextToSpeech = (word: string) => {
    //@ts-ignore
    window.responsiveVoice.speak(word, 'Spanish Latin American Female')
  }

  function checkAnswer(answer: string) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function submitAnswer(selectedAnswer: string, itemId: number) {
    const isCorrect = checkAnswer(selectedAnswer)
    if (isCorrect) {
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
          dispatch(updateMoney({ amount: rewardAmountCorrect.money }))
          dispatch(updateEnergy({ amount: rewardAmountCorrect.energy }))
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

      // Update challenge status
      dispatch(
        updateChallenge({
          locationId,
          challenge: currentChallenge,
          answerResult: ANSWER_RESULT.INCORRECT
        })
      )

      setTimeout(() => {
        dispatch(updateMoney({ amount: rewardAmountIncorrect.money }))
        dispatch(updateEnergy({ amount: rewardAmountIncorrect.energy }))
        dispatch(
          updateWordStats({
            id: itemId,
            log: { timestamp: Date.now(), result: 'INCORRECT' }
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
    dispatch(resetChallenge({ locationId, challenge: currentChallenge }))
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

      {/* Display Correct/Incorrect result */}
      <ResultDisplay
        resultStatus={resultStatus}
        rewardAmountCorrect={rewardAmountCorrect}
        rewardAmountIncorrect={rewardAmountIncorrect}
      />

      {/* Speaker */}
      <div
        className="mx-auto w-12 mb-5 mt-2"
        ref={speakerRef}
        onClick={() => generateTextToSpeech(wordText)}
      >
        <img src={speakerImage} alt="speaker" />
      </div>

      {/* Display choices */}
      {choices.map(choice => (
        <div key={getWordId(choice)}>
          <button
            className={`${mcSelectButtonStyle} ${
              showResult
                ? wordMeaning === getWordMeaning(choice)
                  ? 'bg-green-00 text-white'
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
      <div className="mt-5">
        <span
          className="text-lg"
          onClick={() => handleRevealAnswer(getWordId(currentWord))}
        >
          <u>reveal</u>
        </span>
        {answerRevealed ? ' ' + wordMeaning + '(' + wordText + ')' : ''}
      </div>
    </>
  )
}

export default AudioMultipleChoice
