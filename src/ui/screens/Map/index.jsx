import { MapContainer, TileLayer, Marker } from 'react-leaflet'
import L from 'leaflet'
import { Link, useNavigate } from 'react-router-dom'

const FREE_MAP_API_KEY =
  'pk.eyJ1IjoiZ2FlbGR1b25nIiwiYSI6ImNrb2I1eDZ5NzIyMmEyb3MyZDlqeGRnZTAifQ.p_IcJvFNMnFDoym2YaxlGA'
export const MAP_URLS = {
  MAPBOX_STREETS: `https://api.mapbox.com/styles/v1/mapbox/streets-v11/tiles/{z}/{x}/{y}?access_token=${FREE_MAP_API_KEY}`,
  MAPBOX_DARK: `https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/{z}/{x}/{y}?access_token=${FREE_MAP_API_KEY}`,
  MAPBOX_BASIC: `https://api.mapbox.com/styles/v1/gaelduong/ckojfhu161cjz17ohqzna9e84/tiles/256/{z}/{x}/{y}@2x?access_token=${FREE_MAP_API_KEY}`,
  OPEN_STREET_MAP: 'https://tile.openstreetmap.bzh/br/{z}/{x}/{y}.png'
}

const iconPerson = new L.Icon({
  iconUrl: require('@Asset/images/restaurant.png'),
  //   iconRetinaUrl: require('@Asset/images/restaurant.png'),
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
        url={MAP_URLS.MAPBOX_BASIC}
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
      />
      <Link to="/work">
        <Marker
          position={[43, -71]}
          icon={iconPerson}
          eventHandlers={{
            click: e => {
              navigate('/work', {
                state: {
                  fromMapId: 0,
                  locationId: 0,
                  jobType: 'recog_multiple_choice'
                }
              })
            }
          }}
        />
      </Link>
    </MapContainer>
  )
}
