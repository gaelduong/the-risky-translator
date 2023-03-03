import {
  getWordId,
  getWordListPool,
  getWordMeaning,
  getWordText
} from '@Functions/wordUtils'
import { useMemo } from 'react'
import { useSelector } from 'react-redux'
import { Link, useLocation, useNavigate } from 'react-router-dom'

const WordListView = () => {
  const {
    state: { locationId }
  } = useLocation()

  const navigate = useNavigate()

  const { vocabulary } = useSelector((state: any) => state.vocabulary)
  const wordListPool = useMemo(
    () => getWordListPool(vocabulary, locationId),
    [vocabulary, locationId]
  )

  const navigateToWordDetail = (word: any) => {
    navigate(`/word-list/${getWordId(word)}`, { state: { word } })
  }

  return (
    <div>
      <div>
        <Link to="/town">Back</Link>
      </div>
      <h2>WordListView</h2>
      <table className="x-center">
        <thead>
          <tr>
            <th>Word</th>
            <th>Audio</th>
            <th>Meaning</th>
          </tr>
        </thead>
        <tbody>
          {wordListPool.map((word: any) => {
            return (
              <tr>
                <td onClick={() => navigateToWordDetail(word)}>
                  {getWordText(word)}
                </td>
                <td>
                  <button>Listen</button>
                </td>
                <td>{getWordMeaning(word)}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
    </div>
  )
}

export default WordListView
