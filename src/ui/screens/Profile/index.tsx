import { useSelector } from 'react-redux'
import { creature2Image } from '@Asset/images'
import { Link, useLocation } from 'react-router-dom'
import CustomBackIcon from '@Com/CustomBackIcon'
import './index.css'

const Profile = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { creature } = useSelector((state: any) => state)

  const {
    name,
    attributes: { health, defence, power, accuracy, attackCount, cooldown }
  } = creature

  return (
    <div className="d-flex d-col items-center">
      <CustomBackIcon linkTo={`/town/${townId}`} />
      <h2>{name}</h2>
      <img className="profile-image" src={creature2Image} alt="creature" />
      <Link to="/upgrade" state={{ townId }}>
        <div>
          <button className="upgrade-btn">Upgrade</button>
        </div>
      </Link>

      <h3 className="profile-header">Attributes</h3>
      <div className="d-flex d-col items-start gap-1">
        <div className="d-flex items-center gap-2">
          <div className="circle">{health.value}</div>
          <span className="display-attr">{health.displayName}</span>
        </div>
        <div className="d-flex items-center gap-2">
          <div className="circle">{defence.value}</div>{' '}
          <span className="display-attr">{defence.displayName}</span>
        </div>
        <div className="d-flex items-center gap-2">
          <div className="circle">{power.value}</div>{' '}
          <span className="display-attr">{power.displayName}</span>
        </div>
        <div className="d-flex items-center gap-2">
          <div className="circle">{accuracy.value}</div>{' '}
          <span className="display-attr">{accuracy.displayName}</span>
        </div>
        <div className="d-flex items-center gap-2">
          <div className="circle">{attackCount.value}</div>{' '}
          <span className="display-attr">{attackCount.displayName}</span>
        </div>
        <div className="d-flex items-center gap-2">
          <div className="circle">{cooldown.value}</div>{' '}
          <span className="display-attr">{cooldown.displayName}</span>
        </div>
      </div>
      <h3 className="profile-header">Skills</h3>
    </div>
  )
}

export default Profile
