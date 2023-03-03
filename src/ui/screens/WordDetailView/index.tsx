import { useLocation, useNavigate, useParams } from 'react-router-dom'
import { getWordMeaning, getWordText } from '@Functions/wordUtils'

const WordDetailView = () => {
  const {
    state: { word }
  } = useLocation()
  console.log(word)
  const navigate = useNavigate()

  return (
    <div>
      <div>
        <hr />
        <button onClick={() => navigate(-1)}>Back</button>
      </div>
      <h2>{getWordText(word)}</h2>
      <p>{getWordMeaning(word)}</p>
    </div>
  )
}

export default WordDetailView
