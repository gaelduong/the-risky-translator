import { useLocation } from 'react-router-dom'
import {
  getWordCorrectsExposuresRatio,
  getWordInCorrectsExposuresRatio,
  getWordLongMeaning,
  getWordMeaning,
  getWordStats,
  getWordText
  // getWordAudio,
} from '@Function/wordUtils'
// import { S3_BASE_AUDIO_URL } from '@Constant/index'
import CustomBackIcon from '@Com/shared/CustomBackIcon'

const WordDetailView = () => {
  const {
    state: { word }
  } = useLocation()

  const stats = getWordStats(word)

  const playAudio = async (word: any) => {
    // const audioToPlay = new Audio(`${S3_BASE_AUDIO_URL}/${audio}`)
    // audioToPlay.play()
    //@ts-ignore
    window.responsiveVoice.speak(word, 'Spanish Latin American Female')
  }

  return (
    <div className="text-left max-w-[60%]  mx-auto">
      <div>
        <CustomBackIcon linkTo={-1} />
      </div>
      <h2 className="text-2xl font-bold text-gray-800 mb-2">
        {getWordText(word)}
      </h2>

      <button
        className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded-md mb-4"
        onClick={() => playAudio(getWordText(word))}
      >
        Listen
      </button>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Meaning:</h3>
      <p className="text-gray-700 leading-relaxed mb-4">
        {getWordMeaning(word)}
      </p>
      <p className="text-gray-700 leading-relaxed mb-4">
        {getWordLongMeaning(word)}
      </p>

      <h3 className="text-lg font-semibold text-gray-800 mb-2">Examples:</h3>
      <div className="text-gray-700 leading-relaxed mb-4">...</div>

      <div className="p-4 bg-white rounded-lg shadow-xl">
        <h3 className="text-xl font-semibold text-gray-800 mb-4">Stats</h3>
        <div className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">Total exposures:</span>{' '}
          {stats?.exposures}
        </div>
        <div className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">Corrects:</span> {stats?.corrects}
        </div>
        <div className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">Incorrects:</span> {stats?.incorrects}
        </div>
        <div className="text-gray-700 leading-relaxed mb-2">
          <span className="font-semibold">Reveals:</span> {stats?.reveals}
        </div>
        <div className="text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold">Correct Ratio:</span>{' '}
          {(getWordCorrectsExposuresRatio(word) * 100).toFixed(1)}%
        </div>
        <div className="text-gray-700 leading-relaxed mb-4">
          <span className="font-semibold">Incorrect Ratio:</span>{' '}
          {(getWordInCorrectsExposuresRatio(word) * 100).toFixed(1)}%
        </div>
      </div>
    </div>
  )
}

export default WordDetailView
