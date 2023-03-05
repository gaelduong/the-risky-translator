import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import _ from 'lodash'
import { selectWord } from '@Algorithm/index'
import {
  getRandomWordList,
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import { correctSound, wrongSound } from '@Assets/audios'
import { creatureImage } from '@Assets/images'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { Link, useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const Popup = ({ onClose }: { onClose: any }) => {
  return (
    <div className="popup">
      <p> Are you sure you want to leave your training?</p>
      <div>
        <Link to="/town">
          <button className="close">Leave</button>
        </Link>
      </div>

      <div>
        <button onClick={onClose}>Stay</button>
      </div>
    </div>
  )
}

const RecognizeMultipleChoice = () => {
  const {
    state: { locationId }
  } = useLocation()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)

  const wordListPool = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  const dispatch = useDispatch()

  //   Word, choices, reveals
  const [totalAnswered, setTotalAnswered] = useState<number>(0)
  const [currentWord, setCurrentword] = useState(null)
  const [choices, setChoices] = useState<string[]>([])
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)

  //   Results
  const [showResult, setShowResult] = useState(false)
  const [message, setMessage] = useState('')

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  const [showPopup, setShowPopup] = useState(false)

  // Generate choices for a given word
  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(_.shuffle([currentWord, ...wrongChoices]))
    setMessage('')
  }, [currentWord])

  useEffect(() => {
    // if()
    setCurrentword(selectWord(wordListPool, totalAnswered))
  }, [wordListPool, totalAnswered])

  function checkAnswer(answer: string) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function submitAnswer(selectedAnswer: string, itemId: number) {
    if (checkAnswer(selectedAnswer)) {
      correctAudio.play()
      setMessage(`Correct!\n ${answerRevealed ? '+$0' : '+$1'}`)

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
      setMessage('Wrong!\n -$1')
      setTimeout(() => {
        dispatch(updateMoney({ amount: -1 }))
        dispatch(updateEnergy({ amount: 0 }))
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

  return (
    <>
      <div>
        <button className="leave" onClick={() => setShowPopup(true)}>
          Leave
        </button>
      </div>
      <img className="creature" src={creatureImage} alt="person" />

      <h2 className="header">{wordText}</h2>

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
          <u>reveal</u>
        </span>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default RecognizeMultipleChoice
