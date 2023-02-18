import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { selectWord } from '../../../algorithm'
import { AppContext } from '../../../context'
import { getId, getMeaning, getWord, getWordList } from '../../../data/items'

const Work = () => {
  const {
    state: { fromMapId, locationId }
  } = useLocation()
  const { state, dispatch } = useContext(AppContext)

  const wordList = useMemo(
    () => getWordList(state.items, locationId),
    [state, locationId]
  )
  console.log('WL', wordList)

  const [currentWord, setCurrentword] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    if (checkAnswer(answer)) {
      setAnswer('')
      setMessage('')
      setShowAnswer(false)
      setCurrentword(selectWord(wordList))
    }
  }, [wordList])

  function checkAnswer(answer) {
    return getMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function onAnswerChange(e) {
    setAnswer(e.target.value)
  }

  function submitAnswer(e, itemId) {
    e.preventDefault()

    if (answer === '') return

    if (checkAnswer(answer)) {
      setMessage('Correct!')
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
      setMessage('Wrong!')
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
      Money: {state.money}
      <h1>Work</h1>
      <h2>{getWord(currentWord)}</h2>
      <div>
        <form onSubmit={e => submitAnswer(e, getId(currentWord))}>
          <input
            type="text"
            value={answer}
            onChange={onAnswerChange}
            onSubmit={e => submitAnswer(e, getId(currentWord))}
          />
          <button onSubmit={e => submitAnswer(e, getId(currentWord))}>
            Submit
          </button>
        </form>
        <button onClick={() => setShowAnswer(true)}>Show answer</button>
        {showAnswer ? getMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
      <Link to={`/city${fromMapId}`}>Done</Link>
    </div>
  )
}

export default Work
