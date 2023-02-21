import React, { useState, useEffect, useContext } from 'react'
import { selectWord } from '../../../algorithm'
import { AppContext } from '../../../context'
import {
  getWordId,
  getWordMeaning,
  getWordText
} from '../../../functions/wordUtils'
import correctSound from '../../../assets/audios/correct.mp3'
import wrongSound from '../../../assets/audios/wrong.mp3'
import personImg from '../../../assets/images/person.png'

const RecognitionTypeInput = ({ wordListPool }) => {
  const [correctAudio] = useState(new Audio(correctSound))
  const [wrongAudio] = useState(new Audio(wrongSound))

  const { dispatch } = useContext(AppContext)

  const [currentWord, setCurrentword] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setCurrentword(selectWord(wordListPool))
  }, [])

  useEffect(() => {
    if (checkAnswer(answer)) {
      setAnswer('')
      setMessage('')
      setShowAnswer(false)
      setCurrentword(selectWord(wordListPool))
    }
  }, [wordListPool])

  function checkAnswer(answer) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function onAnswerChange(e) {
    setAnswer(e.target.value)
  }

  function submitAnswer(e, itemId) {
    e.preventDefault()

    if (answer === '') return

    if (checkAnswer(answer)) {
      correctAudio.play()
      setMessage(`Correct! ${showAnswer ? '+$0' : '+$1'}`)
      setTimeout(() => {
        if (!showAnswer) {
          dispatch({ type: 'INCREMENT' })
          dispatch({
            type: 'TRACK_ACTIVITY',
            payload: {
              id: itemId,
              log: { timestamp: Date.now(), result: 'CORRECT' }
            }
          })
        } else {
          dispatch({
            type: 'TRACK_ACTIVITY',
            payload: {
              id: itemId,
              log: { timestamp: Date.now(), result: 'REVEAL' }
            }
          })
        }
      }, 500)
    } else {
      wrongAudio.play()
      setMessage('Wrong! -$5')
      dispatch({ type: 'DECREMENT' })
      dispatch({
        type: 'TRACK_ACTIVITY',
        payload: {
          id: itemId,
          log: { timestamp: Date.now(), result: 'INCORRECT' }
        }
      })
    }
  }

  return (
    <>
      <h2>Help me translate...</h2>
      <img
        style={{ height: 200, width: 'auto' }}
        src={personImg}
        alt="person"
      />
      <h2>{getWordText(currentWord)}</h2>
      <div>
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
        <button onClick={() => setShowAnswer(true)}>Show answer</button>
        {showAnswer ? getWordMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
    </>
  )
}

export default RecognitionTypeInput
