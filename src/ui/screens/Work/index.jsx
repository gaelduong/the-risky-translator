import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { selectWord } from '../../../algorithm'
import { AppContext } from '../../../context'
import {
  getWordId,
  getWordMeaning,
  getWordText,
  getWordListPool
} from '../../../functions/wordUtils'
import Header from '../../components/Header'
import correctSound from '../../../assets/audios/correct.mp3'
import wrongSound from '../../../assets/audios/wrong.mp3'
import personImg from '../../../assets/images/person.png'

const Work = () => {
  const {
    state: { fromMapId, locationId }
  } = useLocation()
  const [correctAudio] = useState(new Audio(correctSound))
  const [wrongAudio] = useState(new Audio(wrongSound))

  const { state, dispatch } = useContext(AppContext)

  const wordList = useMemo(
    () => getWordListPool(state.items, locationId),
    [state, locationId]
  )
  console.log('WL', wordList)

  const [currentWord, setCurrentword] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setCurrentword(selectWord(wordList))
  }, [])

  useEffect(() => {
    if (checkAnswer(answer)) {
      setAnswer('')
      setMessage('')
      setShowAnswer(false)
      setCurrentword(selectWord(wordList))
    }
  }, [wordList])

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
    <div>
      <Header />
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
      <Link to={`/city${fromMapId}`}>Done</Link>
    </div>
  )
}

export default Work
