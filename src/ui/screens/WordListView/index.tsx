import { speakerImage } from '@Asset/images'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { S3_BASE_AUDIO_URL } from '@Constant/index'
import { getLocationId, getLocationName } from '@Function/locationUtils'
import {
  getSortedWordList,
  getWordAudio,
  getWordCorrectsExposuresRatio,
  getWordId,
  getWordInCorrectsExposuresRatio,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Function/wordUtils'
import { useMemo, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const WordListView = () => {
  const {
    state: { location, townId }
  } = useLocation()

  const locationId = getLocationId(location)
  const navigate = useNavigate()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)
  const wordListPool = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  const [displayWords, setDisplayWords] = useState(wordListPool)

  const [sort, setSort] = useState('default')

  const handleSetSort = (e: any) => {
    const sortValue = e.target.value
    setSort(sortValue)

    const sortedWordList = getSortedWordList(wordListPool, sortValue)
    setDisplayWords(sortedWordList)
  }

  // const handleApply = () => {}

  const navigateToWordDetail = (word: any) => {
    navigate(`/word-list/${getWordId(word)}`, { state: { word } })
  }

  const playAudio = async (word: any) => {
    // const audioToPlay = new Audio(`${S3_BASE_AUDIO_URL}/${audio}`)
    // audioToPlay.play()
    // @ts-ignore
    window.responsiveVoice.speak(word, 'Spanish Latin American Female')
  }

  const getStatDisplay = (word: any, sort: string) => {
    let color = ''
    let value = null
    if (sort === 'corrects') {
      color = 'green'
      value = word.stats.corrects
    } else if (sort === 'incorrects') {
      color = 'red'
      value = word.stats.incorrects
    } else if (sort === 'reveals') {
      color = 'orange'
      value = word.stats.reveals
    } else if (sort === 'exposures') {
      color = 'blue'
      value = word.stats.exposures
    } else if (sort === 'corrects_exposures_ratio') {
      color = 'green'
      value = `${(getWordCorrectsExposuresRatio(word) * 100).toFixed(1)}%`
    } else if (sort === 'incorrects_exposures_ratio') {
      color = 'red'
      value = `${(getWordInCorrectsExposuresRatio(word) * 100).toFixed(1)}%`
    }

    return <span style={{ color }}>{value}</span>
  }

  return (
    <div>
      <div>
        <CustomBackIcon linkTo={`/town/${townId}`} />
      </div>
      <h2 className="text-2xl font-bold">{getLocationName(location)}</h2>

      {/* Sorter */}
      <label className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
        Sort by:
      </label>
      <select
        id="sorter"
        className="bg-gray-50 mx-auto my-4 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block  p-1 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
        value={sort}
        onChange={handleSetSort}
      >
        <option value="default">Default</option>
        <option value="random">Random order</option>
        {/* <option value="corrects">Corrects</option> */}
        <option value="incorrects">Incorrects</option>
        {/* <option value="reveals">Reveals</option>  */}
        {/* <option value="exposures">Exposures</option> */}
        <option value="corrects_exposures_ratio">
          Corrects/exposures ratio
        </option>
        {/* <option value="incorrects_exposures_ratio">
          Incorrects/exposures ratio
        </option> */}
        <option value="alphabetical">Alphabetical</option>
      </select>
      {/* Search */}
      {/* <div>
        <label>Search:</label>
        <input type="search" />
      </div> */}

      {/* Search */}
      {/* <div>
        <button onClick={handleApply}>Search</button>
      </div> */}

      {/* Table */}
      <div className="overflow-x-auto mb-4 md:text-lg">
        <table className="mx-auto bg-white shadow-md rounded-lg overflow-hidden">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-center font-bold text-gray-700">
                Word
              </th>
              <th className="px-4 py-2 text-center font-bold text-gray-700">
                Audio
              </th>
              <th className="px-4 py-2 text-center font-bold text-gray-700">
                Meaning
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 text-left">
            {displayWords.map((word: any) => {
              return (
                <tr key={getWordId(word)} className="hover:bg-gray-50">
                  <td
                    className="px-4 py-2 text-gray-700 cursor-pointer"
                    onClick={() => navigateToWordDetail(word)}
                  >
                    {getWordText(word)} {getStatDisplay(word, sort)}
                  </td>
                  <td className="px-4 py-2">
                    {/* <button
                      className="bg-green-500 hover:bg-green-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
                      onClick={() => playAudio(getWordText(word))}
                    >
                      Listen
                    </button> */}
                    <img
                      className="w-6 mx-auto"
                      onClick={() => playAudio(getWordText(word))}
                      src={speakerImage}
                      alt="speaker"
                    />
                  </td>
                  <td className="px-4 py-2 text-gray-700">
                    {getWordMeaning(word)}
                  </td>
                </tr>
              )
            })}
          </tbody>
        </table>
      </div>
    </div>
  )
}

export default WordListView
