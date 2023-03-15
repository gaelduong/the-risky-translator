import { useState, useEffect, useMemo, useRef } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
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
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { Word } from '@Type/word'
import { ANSWER_RESULT, S3_BASE_AUDIO_URL } from '@Constant/index'

import {
  getChallengeCurrentStatusDisplay,
  getCurrentChallenge
} from '@Function/challengeUtils'
import { resetChallenge, updateChallenge } from '@Redux/slices/challengeSlice'
import ResultDisplay from '@Com/training/ResultDisplay'

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

const AudioType = () => {
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
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)

  const [answer, setAnswer] = useState('')

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

  useEffect(() => {
    setCurrentword(selectWord(wordListPool, totalAnswered))
  }, [])

  useEffect(() => {
    if (checkAnswer(answer)) {
      setAnswer('')
      setAnswerRevealed(false)
      setCurrentword(selectWord(wordListPool, totalAnswered))
    }
  }, [wordListPool, totalAnswered])

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

  const playAudio2 = (word: string) => {
    //@ts-ignore
    window.responsiveVoice.speak(word, 'Spanish Latin American Female')
  }

  function checkAnswer(answer: string) {
    return (
      answer.length > 1 &&
      getWordMeaning(currentWord).toLowerCase().startsWith(answer.toLowerCase())
    )
  }

  function onAnswerChange(e: any) {
    setAnswer(e.target.value)
  }

  function submitAnswer(e: any, itemId: number) {
    e.preventDefault()

    if (answer === '') return

    const isCorrect = checkAnswer(answer)
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
      } else {
        dispatch(resetChallenge({ locationId, challenge: currentChallenge }))
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
      <CustomBackIcon
        linkTo={`/town/${townId}`}
        popup={{
          prompt: 'Are you sure you want to leave your training?',
          yesText: 'Leave',
          noText: 'Stay'
        }}
      />
      <img className="creature" src={creatureImage} alt="person" />

      {currentChallenge && (
        <div className="challenge-container">
          <div>
            <span
              className="challenge-tag"
              style={{ backgroundColor: currentChallenge.bgColor }}
            >
              <b>Level {currentChallenge.challengeLevel}</b>:{' '}
              {currentChallenge.challengeTitle}
            </span>
          </div>
          <div>
            <span className="challenge-status">
              {getChallengeCurrentStatusDisplay(currentChallenge)}
            </span>
          </div>
        </div>
      )}

      {/* <ResultDisplay resultStatus={resultStatus} rewardAmountCorrect={rewardAmountCorrect} rewardAmountIncorrect={rewardAmountIncorrect}> */}

      {/* <h2 className="header">{wordText}</h2> */}
      <div ref={speakerRef} onClick={() => playAudio2(wordText)}>
        <img
          style={{ width: '3rem', margin: '1rem 0' }}
          src={speakerImage}
          alt="speaker"
        />
      </div>

      <form
        style={{ margin: 20 }}
        onSubmit={e => submitAnswer(e, getWordId(currentWord))}
      >
        <input
          style={{ height: 24 }}
          type="text"
          value={answer}
          onChange={onAnswerChange}
          onSubmit={e => submitAnswer(e, getWordId(currentWord))}
        />
        <button onSubmit={e => submitAnswer(e, getWordId(currentWord))}>
          Submit
        </button>
      </form>

      <div style={{ marginTop: 20 }}>
        <span
          className="reveal"
          onClick={() => handleRevealAnswer(getWordId(currentWord))}
        >
          <u>reveal</u>
        </span>
        {answerRevealed ? ' ' + wordMeaning + '(' + wordText + ')' : ''}
      </div>
    </>
  )
}

export default AudioType
