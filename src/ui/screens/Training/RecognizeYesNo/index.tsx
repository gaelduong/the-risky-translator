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

const RecognizeYesNo = () => {
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
  const [answerRevealed, setAnswerRevealed] = useState<boolean>(false)
  const [movedToNext, setMovedToNext] = useState<boolean>(true)

  //   Get current word's content
  const wordId = getWordId(currentWord)
  const wordText = getWordText(currentWord)
  const wordMeaning = getWordMeaning(currentWord)

  const [showPopup, setShowPopup] = useState(false)

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

  return (
    <>
      <div>
        <button className="leave" onClick={() => setShowPopup(true)}>
          Leave
        </button>
      </div>
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

      {showPopup && <Popup onClose={() => setShowPopup(false)} />}
    </>
  )
}

export default RecognizeYesNo
