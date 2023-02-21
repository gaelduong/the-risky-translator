import React, { useContext, useMemo } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { AppContext } from '../../../context'
import { getWordListPool } from '../../../functions/wordUtils'
import Header from '../../components/Header'
import RecognitionMultipleChoice from '../../components/RecognitionMultipleChoice'
import RecognitionTypeInput from '../../components/RecognitionTypeInput'

const Work = () => {
  const {
    state: { fromMapId, locationId, workType }
  } = useLocation()

  const { state } = useContext(AppContext)

  const wordListPool = useMemo(
    () => getWordListPool(state.items, locationId),
    [state, locationId]
  )
  console.log('WL', wordListPool)

  const getWorkType = (workType, wordListPool) => {
    if (!workType) return <></>
    const workTypeMap = {
      recog_type_input: <RecognitionTypeInput wordListPool={wordListPool} />,
      recog_multiple_choice: (
        <RecognitionMultipleChoice wordListPool={wordListPool} />
      )
    }
    return workTypeMap[workType]
  }

  return (
    <div>
      <Header />
      {getWorkType(workType, wordListPool)}
      <Link to={`/city${fromMapId}`}>
        <u>Finish Job</u>
      </Link>
    </div>
  )
}

export default Work
