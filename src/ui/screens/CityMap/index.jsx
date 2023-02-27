import { Link } from 'react-router-dom'
import Location from '../../components/Location'

// Dynamic CityMap Screen
const CityMap = ({ cityMap, numCityMaps }) => {
  const cityMapId = cityMap.cityMapId
  return (
    <div>
      <h1>{cityMap.cityMapName}</h1>
      <div
        style={{
          display: 'flex',
          flexWrap: 'wrap',
          justifyContent: 'center',
          gap: 10,
          padding: 50
        }}
      >
        {cityMap.locations.map(location => (
          <Location
            key={location.id}
            locationId={location.id}
            locationName={location.locationName}
            //   position={location.position}
            image={location.image}
            fromMapId={cityMapId}
          />
        ))}
      </div>
      {cityMapId > 0 && (
        <Link to={`/city${cityMapId - 1}`}>
          <button>Back</button>
        </Link>
      )}

      {cityMapId < numCityMaps - 1 && (
        <Link to={`/city${cityMapId + 1}`}>
          <button>Next</button>
        </Link>
      )}
    </div>
  )
}

export default CityMap
