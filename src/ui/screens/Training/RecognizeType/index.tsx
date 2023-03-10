import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Function/wordUtils'
import { correctSound, wrongSound } from '@Asset/audios'
import { updateEnergy, updateMoney } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import { creatureImage } from '@Asset/images'
import CustomBackIcon from '@Com/CustomBackIcon'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const RecognizeType = () => {
  const {
    state: { locationId, townId }
  } = useLocation()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)

  const wordListPool = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  const dispatch = useDispatch()
  const [totalAnswered, setTotalAnswered] = useState<number>(0)
  const [currentWord, setCurrentword] = useState(null)
  const [answer, setAnswer] = useState('')
  const [message, setMessage] = useState('')
  const [showAnswer, setShowAnswer] = useState(false)

  useEffect(() => {
    setCurrentword(selectWord(wordListPool, totalAnswered))
  }, [])

  useEffect(() => {
    if (checkAnswer(answer)) {
      setAnswer('')
      setMessage('')
      setShowAnswer(false)
      setCurrentword(selectWord(wordListPool, totalAnswered))
    }
  }, [wordListPool, totalAnswered])

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

    if (checkAnswer(answer)) {
      correctAudio.play()
      setMessage(`Correct!\n ${showAnswer ? '+$0' : '+$1'}`)
      setTimeout(() => {
        if (!showAnswer) {
          dispatch(updateMoney({ amount: 1 }))
          dispatch(updateEnergy({ amount: 2 }))
          dispatch(
            updateWordStats({
              id: itemId,
              log: { timestamp: Date.now(), result: 'CORRECT' }
            })
          )
        } else {
        }
        setTotalAnswered(totalAnswered => totalAnswered + 1)
      }, 500)
    } else {
      wrongAudio.play()
      setMessage('Wrong! -$1')
      dispatch(updateMoney({ amount: -1 }))
      dispatch(updateEnergy({ amount: 0 }))
      dispatch(
        updateWordStats({
          id: itemId,
          log: { timestamp: Date.now(), result: 'INCORRECT' }
        })
      )
    }
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

export default RecognizeType
