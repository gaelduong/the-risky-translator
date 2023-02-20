import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { Link, useNavigate } from 'react-router-dom'

const iconPerson = new L.Icon({
  iconUrl: require('../../../assets/images/restaurant.png'),
  //   iconRetinaUrl: require('../../../assets/images/restaurant.png'),
  iconAnchor: null,
  popupAnchor: null,
  shadowUrl: null,
  shadowSize: null,
  shadowAnchor: null,
  iconSize: new L.Point(60, 75),
  className: 'leaflet-div-icon'
})

export default function Map() {
  const navigate = useNavigate()
  return (
    <MapContainer
      className="markercluster-map"
      center={[43, -71]}
      zoom={4}
      maxZoom={18}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Link to="/work">
        <Marker
          position={[43, -71]}
          icon={iconPerson}
          eventHandlers={{
            click: e => {
              navigate('/work', { state: { fromMapId: 0, locationId: 0 } })
            }
          }}
        />
      </Link>
    </MapContainer>
  )
}
