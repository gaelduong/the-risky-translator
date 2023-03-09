import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
  getRandomWordList,
  getWordAudio,
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import { correctSound, wrongSound } from '@Assets/audios'
import { creatureImage, speakerImage } from '@Assets/images'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import CustomBackIcon from '@Com/CustomBackIcon'
import { Word } from '@Types/word'
import { shuffleArray } from '@Functions/generalUtils'

// Sound effects
const correctAudio = new Audio(correctSound)
const wrongAudio = new Audio(wrongSound)

const AudioMultipleChoice = ({ audioObjects }: { audioObjects: any }) => {
  const {
    state: { locationId, townId }
  } = useLocation()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)

  const wordListPool: Word[] = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  const dispatch = useDispatch()

  //   Word, choices, reveals
  const [totalAnswered, setTotalAnswered] = useState<number>(0)
  const [currentWord, setCurrentword] = useState<Word | null>(null)
  const [choices, setChoices] = useState<Word[]>([])
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)

  //   Results
  const [showResult, setShowResult] = useState(false)
  const [message, setMessage] = useState('')

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)
  const wordAudio = getWordAudio(currentWord)

  // Generate choices for a given word
  useEffect(() => {
    const wrongChoices = getRandomWordList(wordListPool, 1, wordId)
    setChoices(shuffleArray([currentWord, ...wrongChoices]))
    setMessage('')
  }, [currentWord])

  useEffect(() => {
    const selectedWord = selectWord(wordListPool, totalAnswered)
    setCurrentword(selectedWord)
    playAudio2(getWordId(selectedWord))
  }, [totalAnswered])

  const playAudio = async (audio: any) => {
    const module = await import(`@Assets/audios/words/${audio}`)
    const audioToPlay = new Audio(module.default)
    audioToPlay.play()
  }

  const playAudio2 = (wordId: number) => {
    audioObjects[wordId].play()
  }

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
      <CustomBackIcon
        linkTo={`/town/${townId}`}
        popup={{
          prompt: 'Are you sure you want to leave your training?',
          yesText: 'Leave',
          noText: 'Stay'
        }}
      />
      <img className="creature" src={creatureImage} alt="person" />

      {/* <h2 className="header">{wordText}</h2> */}
      <div onClick={() => playAudio2(wordId)}>
        <img
          style={{ width: '3rem', margin: '2rem' }}
          src={speakerImage}
          alt="spealer"
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
          <u>reveal</u>
        </span>
        {answerRevealed ? getWordMeaning(currentWord) : ''}
        <h3>{message}</h3>
      </div>
    </>
  )
}

export default AudioMultipleChoice
