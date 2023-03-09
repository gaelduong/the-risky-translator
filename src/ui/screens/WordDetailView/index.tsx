import { useRef } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'
import {
  getWordAudio,
  getWordCorrectsExposuresRatio,
  getWordInCorrectsExposuresRatio,
  getWordLongMeaning,
  getWordMeaning,
  getWordStats,
  getWordText
} from '@Functions/wordUtils'

const WordDetailView = () => {
  const {
    state: { word }
  } = useLocation()

  const navigate = useNavigate()

  const audioRef = useRef<HTMLAudioElement>(null)
  const stats = getWordStats(word)

  const playAudio = (audio: any) => {
    if (!audioRef.current) return
    audioRef.current.src = audio
    audioRef.current?.play()
  }

  return (
    <div>
      <div>
        <hr />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <h2>{getWordText(word)}</h2>

      <button onClick={() => playAudio(getWordAudio(word))}>Listen</button>
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
      </audio>

      <h3>Meaning:</h3>
      <p>{getWordMeaning(word)}</p>
      <p>{getWordLongMeaning(word)}</p>

      <h3>Examples:</h3>
      <div>...</div>

      <h3>Stats</h3>
      <div>Total exposures: {stats?.exposures}</div>
      <div>Corrects: {stats?.corrects}</div>
      <div>Incorrects: {stats?.incorrects}</div>
      <div>Reveals: {stats?.reveals}</div>
      <div>
        Corrects/Exposure:{' '}
        {(getWordCorrectsExposuresRatio(word) * 100).toFixed(1)}%
      </div>
      <div>
        Incorrects/Exposure:{' '}
        {(getWordInCorrectsExposuresRatio(word) * 100).toFixed(1)}%
      </div>
    </div>
  )
}

export default WordDetailView
