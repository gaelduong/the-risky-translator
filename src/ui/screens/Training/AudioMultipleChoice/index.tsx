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
import {
  coinImage,
  creatureImage,
  energyImage,
  speakerImage
} from '@Asset/images'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import CustomBackIcon from '@Com/CustomBackIcon'
import { Word } from '@Type/word'
import { shuffleArray } from '@Function/generalUtils'
import { ANSWER_RESULT, S3_BASE_AUDIO_URL } from '@Constant/index'

import '../index.css'
import {
  getChallengeCurrentStatusDisplay,
  getCurrentChallenge
} from '@Function/challengeUtils'
import { resetChallenge, updateChallenge } from '@Redux/slices/challengeSlice'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const rewardAmountCorrect = {
  money: 1,
  energy: 0
}

const rewardAmountIncorrect = {
  money: -1,
  energy: 0
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
  const [resultStatus, setResultStatus] = useState<string | null>(null)

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

  function checkAnswer(answer: string) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function submitAnswer(selectedAnswer: string, itemId: number) {
    const isCorrect = checkAnswer(selectedAnswer)
    if (isCorrect) {
      correctAudio.play()
      setResultStatus('correct')

      // Update challenge status
      dispatch(
        updateChallenge({
          locationId,
          challenge: currentChallenge,
          answerResult: ANSWER_RESULT.CORRECT
        })
      )

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
      setResultStatus('incorrect')

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
    // dispatch(
    //   updateWordStats({
    //     id: itemId,
    //     log: { timestamp: Date.now(), result: 'REVEAL' }
    //   })
    // )
  }

  const resultMessage = resultStatus ? (
    (() => {
      const amountObj =
        resultStatus === 'correct' ? rewardAmountCorrect : rewardAmountIncorrect

      const amountMoneyDisplay =
        amountObj.money > 0 ? `+${amountObj.money}` : amountObj.money
      const amountEnergyDisplay =
        amountObj.energy > 0 ? `+${amountObj.energy}` : amountObj.energy

      return (
        <div className="message-container d-flex justify-center items-center gap-2">
          <span
            className={`message ${
              resultStatus === 'correct' ? 'correct' : 'incorrect'
            }`}
          >
            {resultStatus === 'correct' ? 'Correct' : 'Incorrect'}
          </span>
          <div className="d-flex d-col gap-0">
            {amountObj.money !== 0 && (
              <div className="d-flex justify-center items-center gap-0">
                <span className="amount-text"> {amountMoneyDisplay}</span>
                <img className="reward-img" src={coinImage} alt="coin" />
              </div>
            )}
            {amountObj.energy !== 0 && (
              <div className="d-flex justify-center items-center gap-0">
                <span className="amount-text"> {amountEnergyDisplay}</span>
                <img className="reward-img" src={energyImage} alt="energy" />
              </div>
            )}
          </div>
        </div>
      )
    })()
  ) : (
    <div style={{ height: '2.59375rem', margin: '-1.5rem 0' }}></div>
  )

  return (
    <>
      <CustomBackIcon
        linkTo={`/town/${townId}`}
        popup={{
          prompt: 'Are you sure you want to leave your training?',
          yesText: 'Leave',
          noText: 'Stay'
        }}
      />
      {currentChallenge && (
        <>
          <div>
            <span className="challenge-tag">
              <b>Challenge #{currentChallenge.challengeLevel}</b>:
              {currentChallenge.challengeTitle}
            </span>
          </div>
          <div>
            <span className="challenge-status">
              {getChallengeCurrentStatusDisplay(currentChallenge)}
            </span>
          </div>
        </>
      )}
      <img className="creature" src={creatureImage} alt="person" />

      {resultMessage}

      {/* <h2 className="header">{wordText}</h2> */}
      <div ref={speakerRef} onClick={() => playAudio(wordAudio)}>
        <img
          style={{ width: '3rem', margin: '2rem 0' }}
          src={speakerImage}
          alt="speaker"
        />
      </div>

      {choices.map(choice => (
        <div key={getWordId(choice)}>
          <button
            className={`mc-select-button ${
              showResult
                ? wordMeaning === getWordMeaning(choice)
                  ? 'mc-correct'
                  : 'mc-wrong'
                : ''
            }`}
            disabled={showResult}
            onClick={() => submitAnswer(getWordMeaning(choice), wordId)}
          >
            {getWordMeaning(choice)}
          </button>
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <span
          className="reveal"
          onClick={() => handleRevealAnswer(getWordId(currentWord))}
        >
          {/* <u>reveal</u> */}
        </span>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
      </div>
    </>
  )
}

export default AudioMultipleChoice
