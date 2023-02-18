import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AppContext } from '../../../context'
import Location from '../../components/Location'

const CityMap2 = () => {
  const { state } = useContext(AppContext)

  return (
    <div>
      <h1>CityMap2</h1>
      Money: {state.money.money}
      <Location
        indices={{ start: 10, end: 19 }}
        locationId={1}
        name={'Hospital'}
        fromMapId={2}
      />
      <Location
        indices={{ start: 20, end: 29 }}
        locationId={2}
        name={'Lemonade Stand'}
        fromMapId={2}
      />
      <Location
        indices={{ start: 30, end: 38 }}
        locationId={3}
        name={'Movie Theater'}
        fromMapId={2}
      />
      <Link to="/city1">
        <button>Back</button>
      </Link>
    </div>
  )
}

export default CityMap2
