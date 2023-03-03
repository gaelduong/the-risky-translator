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
  const [answerRevealed, setAnswerRevealed] = useState(false)

  //   Results
  const [showResult, setShowResult] = useState(false)
  const [message, setMessage] = useState('')

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  const [showPopup, setShowPopup] = useState(false)

  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(_.shuffle([currentWord, ...wrongChoices]))
    setMessage('')
  }, [currentWord, wordListPool, wordId])

  useEffect(() => {
    setCurrentword(selectWord(wordListPool))
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
        }

        // dispatch({
        //   type: 'TRACK_ACTIVITY',
        //   payload: {
        //     id: itemId,
        //     log: { timestamp: Date.now(), result: 'CORRECT' }
        //   }
        // })
        setShowResult(false)
        setTotalAnswered(totalAnswered => totalAnswered + 1)
      }, 1000)
    } else {
      wrongAudio.play()
      setMessage('Wrong!\n -$1')
      setTimeout(() => {
        dispatch(updateMoney({ amount: -1 }))
        dispatch(updateEnergy({ amount: 0 }))
        // dispatch({
        //   type: 'TRACK_ACTIVITY',
        //   payload: {
        //     id: itemId,
        //     log: { timestamp: Date.now(), result: 'INCORRECT' }
        //   }
        // })
        setShowResult(false)
        setTotalAnswered(totalAnswered => totalAnswered + 1)
      }, 1000)
    }
    setAnswerRevealed(false)
    setShowResult(true)
  }

  return (
    <>
      <h2></h2>
      <button className="leave" onClick={() => setShowPopup(true)}>
        Leave
      </button>
      <h2>Help me select...</h2>
      <img
        style={{ height: 200, width: 'auto' }}
        src={creatureImage}
        alt="person"
      />
      <h2>{wordText}</h2>

      {choices.map(choice => (
        <div key={getWordId(choice)}>
          <button
            className={
              showResult
                ? wordMeaning === getWordMeaning(choice)
                  ? 'button2'
                  : 'button1'
                : 'button1'
            }
            disabled={showResult}
            onClick={() => submitAnswer(getWordMeaning(choice), wordId)}
          >
            {getWordMeaning(choice)}
          </button>
        </div>
      ))}

      <div style={{ marginTop: 20 }}>
        <button onClick={() => setAnswerRevealed(true)}>Cheat</button>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default RecognizeMultipleChoice
