import { useSelector } from 'react-redux'
import { creatureImage } from '@Assets/images'
import { Link } from 'react-router-dom'

const Profile = () => {
  const { creature } = useSelector((state: any) => state)

  const {
    name,
    attributes: { health, defence, power, accuracy, attackCount, cooldown }
  } = creature

  return (
    <div>
      <Link to="/town">Back</Link>
      <h2>Profile</h2>
      <h2>{name}</h2>
      <img style={{ width: 100 }} src={creatureImage} alt="creature" />
      <Link to="/upgrade">
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
