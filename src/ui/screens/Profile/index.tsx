import { useSelector } from 'react-redux'
import { creature2Image } from '@Assets/images'
import { Link, useLocation } from 'react-router-dom'
import CustomBackIcon from '@Com/CustomBackIcon'

const Profile = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { creature } = useSelector((state: any) => state)

  const {
    name,
    attributes: { health, defence, power, accuracy, attackCount, cooldown }
  } = creature

  return (
    <div>
      <CustomBackIcon linkTo={`/town/${townId}`} />
      <h2>{name}</h2>
      <img className="profile-image" src={creature2Image} alt="creature" />
      <Link to="/upgrade" state={{ townId }}>
        <div>
          <button>Upgrade</button>
        </div>
      </Link>

      <h2>Attributes</h2>
      <div>
        <span>{health.value}</span> <span>{health.displayName}</span>
      </div>
      <div>
        <span>{defence.value}</span> <span>{defence.displayName}</span>
      </div>
      <div>
        <span>{power.value}</span> <span>{power.displayName}</span>
      </div>
      <div>
        <span>{accuracy.value}</span> <span>{accuracy.displayName}</span>
      </div>
      <div>
        <span>{attackCount.value}</span> <span>{attackCount.displayName}</span>
      </div>
      <div>
        <span>{cooldown.value}</span> <span>{cooldown.displayName}</span>
      </div>
      <h2>Skills</h2>
    </div>
  )
}

export default Profile
