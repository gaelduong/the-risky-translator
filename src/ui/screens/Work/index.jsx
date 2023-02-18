import React, { useState, useEffect, useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../../context'
import { WORDS } from '../../../data/items'

const Work = () => {
  const {
    state: { fromMapId, indices }
  } = useLocation()
  const { state, dispatch } = useContext(AppContext)

  const wordList = useMemo(
    () => WORDS.slice(indices.start, indices.end + 1),
    [JSON.stringify(indices), indices.start, indices.end]
  )

  const [currentWord, setCurrentword] = useState('')
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setCurrentword(wordList[Math.floor(Math.random() * wordList.length)])
  }, [wordList])

  function onAnswerChange(e) {
    setAnswer(e.target.value)
  }

  function submitAnswer(e) {
    e.preventDefault()

    if (answer === '') return

    if (currentWord.meaning.toLowerCase() === answer.toLowerCase()) {
      setMessage('Correct!')
      setTimeout(() => {
        setCurrentword(wordList[Math.floor(Math.random() * wordList.length)])
        setMessage('')
        setAnswer('')
        if (!showAnswer) dispatch({ type: 'INCREMENT' })
        setShowAnswer(false)
      }, 500)
    } else {
      setMessage('Wrong!')
      dispatch({ type: 'DECREMENT' })
    }
  }

  return (
    <div>
      Money: {state.money.money}
      <h1>Work</h1>
      <h2>{currentWord.word}</h2>
      <div>
        <form onSubmit={submitAnswer}>
          <input
            type="text"
            value={answer}
            onChange={onAnswerChange}
            onSubmit={submitAnswer}
          />
          <button onSubmit={submitAnswer}>Submit</button>
        </form>
        <button onClick={() => setShowAnswer(true)}>Show answer</button>
        {showAnswer ? currentWord.meaning : ''}
        <h3>{message}</h3>
      </div>
      <Link to={`/city${fromMapId}`}>Done</Link>
    </div>
  )
}

export default Work
