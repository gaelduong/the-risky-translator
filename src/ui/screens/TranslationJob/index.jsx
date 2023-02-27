import { useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../../context'
import { getWordListPool } from '../../../functions/wordUtils'
import RecognitionMultipleChoice from '../../components/RecognitionMultipleChoice'
import RecognitionTypeInput from '../../components/RecognitionTypeInput'

const TranslationJob = () => {
  // window.addEventListener('scroll', e => {
  //   e.preventDefault()
  //   window.scrollTo(0, 0)
  // })
  const {
    state: { fromMapId, locationId, jobType }
  } = useLocation()

  const { state } = useContext(AppContext)

  const wordListPool = useMemo(
    () => getWordListPool(state.vocabulary, locationId),
    [state.vocabulary, locationId]
  )

  const getWorkType = (jobType, wordListPool) => {
    if (!jobType) return <></>
    const workTypeMap = {
      recog_type_input: <RecognitionTypeInput wordListPool={wordListPool} />,
      recog_multiple_choice: (
        <RecognitionMultipleChoice wordListPool={wordListPool} />
      )
    }
    return workTypeMap[jobType]
  }

  return (
    <div>
      {getWorkType(jobType, wordListPool)}
      <Link to={`/city${fromMapId}`}>
        <u>Finish Job</u>
      </Link>
    </div>
  )
}

export default TranslationJob
