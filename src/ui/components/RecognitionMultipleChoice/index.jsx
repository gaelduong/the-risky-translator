import { useState, useEffect } from 'react'
import { useDispatch } from 'react-redux'
import _ from 'lodash'
import { selectWord } from '@Algorithm'
import {
  getRandomWordList,
  getWordId,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import correctSound from '@Assets/audios/correct.mp3'
import wrongSound from '@Assets/audios/wrong.mp3'
import personImg from '@Assets/images/person.png'
import personImg1 from '@Assets/images/person1.png'
import personImg2 from '@Assets/images/person2.png'
import personImg3 from '@Assets/images/person3.png'
import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
const personImages = [personImg, personImg1, personImg2, personImg3]

const RecognitionMultipleChoice = ({ wordListPool }) => {
  const [correctAudio] = useState(new Audio(correctSound))
  const [wrongAudio] = useState(new Audio(wrongSound))

  const dispatch = useDispatch()

  const [image, setImage] = useState(null)

  const [currentWord, setCurrentword] = useState(null)
  const [choices, setChoices] = useState([])
  const [answerRevealed, setAnswerRevealed] = useState(false)
  const [showResult, setShowResult] = useState(false)
  const [message, setMessage] = useState('')

  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(_.shuffle([currentWord, ...wrongChoices]))
    setImage(personImages[Math.floor(Math.random() * personImages.length)])
    setMessage('')
  }, [currentWord, wordListPool, wordId])

  useEffect(() => {
    setCurrentword(selectWord(wordListPool))
  }, [wordListPool])

  function checkAnswer(answer) {
    return getWordMeaning(currentWord).toLowerCase() === answer.toLowerCase()
  }

  function submitAnswer(selectedAnswer, itemId) {
    if (checkAnswer(selectedAnswer)) {
      correctAudio.play()
      setMessage(`Correct!\n ${answerRevealed ? '+$0' : '+$1'}`)
      setTimeout(() => {
        dispatch(updateMoney({ amount: 1 }))
        dispatch(updateEnergy({ amount: 2 }))
        // dispatch({
        //   type: 'TRACK_ACTIVITY',
        //   payload: {
        //     id: itemId,
        //     log: { timestamp: Date.now(), result: 'CORRECT' }
        //   }
        // })
        setShowResult(false)
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
      }, 1000)
    }
    setAnswerRevealed(false)
    setShowResult(true)
  }

  return (
    <>
      <h2>Help me select...</h2>
      <img style={{ height: 200, width: 'auto' }} src={image} alt="person" />
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
        <button onClick={() => setAnswerRevealed(true)}>Reveal</button>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
    </>
  )
}

export default RecognitionMultipleChoice
