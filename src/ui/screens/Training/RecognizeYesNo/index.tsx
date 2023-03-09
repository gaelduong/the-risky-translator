import { useState, useEffect, useMemo } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { selectWord } from '@Algorithm/index'
import {
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import { wrongSound } from '@Assets/audios'
import { creatureImage } from '@Assets/images'

import { updateMoney, updateEnergy } from '@Redux/slices/resourceSlice'
import { useLocation } from 'react-router-dom'
import { updateWordStats } from '@Redux/slices/vocabularySlice'
import CustomBackIcon from '@Com/CustomBackIcon'

// Sound effects
const wrongAudio = new Audio(wrongSound)

const RecognizeYesNo = () => {
  const {
    state: { locationId, townId }
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
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)
  const [movedToNext, setMovedToNext] = useState<boolean>(true)

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  useEffect(() => {
    if (!movedToNext) return
    setCurrentword(selectWord(wordListPool, totalAnswered))
    setMovedToNext(false)
    setAnswerRevealed(false)
  }, [wordListPool, totalAnswered, movedToNext])

  const moveToNextWord = () => {
    setTotalAnswered(totalAnswered + 1)
    setMovedToNext(true)
  }

  const markCorrect = (itemId: number) => {
    wrongAudio.play()
    dispatch(updateMoney({ amount: -1 }))
    dispatch(updateEnergy({ amount: 0 }))
    dispatch(
      updateWordStats({
        id: itemId,
        log: { timestamp: Date.now(), result: 'CORRECT' }
      })
    )
    setAnswerRevealed(true)
  }

  const markIncorrect = (itemId: number) => {
    wrongAudio.play()
    dispatch(updateMoney({ amount: 1 }))
    dispatch(updateEnergy({ amount: 2 }))
    dispatch(
      updateWordStats({
        id: itemId,
        log: { timestamp: Date.now(), result: 'INCORRECT' }
      })
    )
    setAnswerRevealed(true)
  }

  console.log(townId)

  return (
    <>
      <CustomBackIcon
        linkTo={`/town/${townId}`}
        popup={{
          prompt: 'Are you sure you want to leave your training',
          yesText: 'Leave',
          noText: 'Stay'
        }}
      />
      <img className="creature" src={creatureImage} alt="person" />

      <h2 className="header">{wordText}</h2>

      <div>
        <button
          className="yesno-btn yes-btn"
          disabled={answerRevealed}
          onClick={() => markCorrect(wordId)}
        >
          Yes I know this word
        </button>
      </div>
      <div>
        <button
          className="yesno-btn mc-wrong"
          disabled={answerRevealed}
          onClick={() => markIncorrect(wordId)}
        >
          I don't know / I'm not sure
        </button>
      </div>

      {answerRevealed && (
        <div>
          <button className="next-btn" onClick={moveToNextWord}>
            Next
          </button>
        </div>
      )}
      {answerRevealed ? wordMeaning : ''}
    </>
  )
}

export default RecognizeYesNo
