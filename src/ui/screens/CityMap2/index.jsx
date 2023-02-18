import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import Location from '../../components/Location'

const CityMap2 = () => {
  const { state } = useContext(AppContext)

  return (
    <div>
      <h1>CityMap2</h1>
      Money: {state.money}
      <Location locationId={1} locatioName={'Hospital'} fromMapId={2} />
      <Location locationId={2} locatioName={'Lemonade Stand'} fromMapId={2} />
      <Location locationId={3} locatioName={'Movie Theater'} fromMapId={2} />
      <Link to="/city1">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default CityMap2
