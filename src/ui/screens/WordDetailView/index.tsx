import { useLocation } from 'react-router-dom'
import {
  getWordAudio,
  getWordCorrectsExposuresRatio,
  getWordInCorrectsExposuresRatio,
  getWordLongMeaning,
  getWordMeaning,
  getWordStats,
  getWordText
} from '@Function/wordUtils'
import { S3_BASE_AUDIO_URL } from '@Constant/index'
import CustomBackIcon from '@Com/CustomBackIcon'

const WordDetailView = () => {
  const {
    state: { word }
  } = useLocation()

  const stats = getWordStats(word)

  const playAudio = async (audio: any) => {
    const audioToPlay = new Audio(`${S3_BASE_AUDIO_URL}/${audio}`)
    audioToPlay.play()
  }

  return (
    <div>
      <div>
        <CustomBackIcon linkTo={-1} />
      </div>
      <h2>{getWordText(word)}</h2>

      <button onClick={() => playAudio(getWordAudio(word))}>Listen</button>

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
