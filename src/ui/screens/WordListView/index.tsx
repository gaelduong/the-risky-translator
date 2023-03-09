import CustomBackIcon from '@Com/CustomBackIcon'
import { getLocationId, getLocationName } from '@Functions/locationUtils'
import {
  getSortedWordList,
  getWordAudio,
  getWordCorrectsExposuresRatio,
  getWordId,
  getWordInCorrectsExposuresRatio,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import { useMemo, useRef, useState } from 'react'
import { useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'

const WordListView = () => {
  const {
    state: { location, townId }
  } = useLocation()

  const locationId = getLocationId(location)
  const audioRef = useRef<HTMLAudioElement>(null)
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

  const playAudio = (audio: any) => {
    if (!audioRef.current) return
    audioRef.current.src = audio
    audioRef.current?.play()
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
      <h2>{getLocationName(location)}</h2>

      {/* Sorter */}
      <label>Sort by:</label>
      <select id="sorter" value={sort} onChange={handleSetSort}>
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
      <hr />
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
      <table className="x-center">
        <thead>
          <tr>
            <th>Word</th>
            <th>Audio</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {displayWords.map((word: any) => {
            return (
              <tr key={getWordId(word)}>
                <td onClick={() => navigateToWordDetail(word)}>
                  {getWordText(word)} {getStatDisplay(word, sort)}
                </td>
                <td>
                  <button onClick={() => playAudio(getWordAudio(word))}>
                    Listen
                  </button>
                </td>
                <td>{getWordMeaning(word)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>

      {/* Audio */}
      <audio ref={audioRef}>
        <source type="audio/mpeg" />
      </audio>
    </div>
  )
}

export default WordListView
