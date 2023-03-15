import { useSelector } from 'react-redux'
import { creature2Image } from '@Asset/images'
import { Link, useLocation } from 'react-router-dom'
import CustomBackIcon from '@Com/shared/CustomBackIcon'

const Profile = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { creature } = useSelector((state: any) => state)

  const { name, attributes } = creature
  return (
    <div className="flex flex-col items-center">
      <CustomBackIcon linkTo={`/town/${townId}`} />
      <h2>{name}</h2>
      <img
        className="w-[12rem] -mt-5 max-h-[50%] object-contain"
        src={creature2Image}
        alt="creature"
      />
      <Link to="/upgrade" state={{ townId }}>
        <div>
          <button
            className="bg-olivedrab 
            text-base font-bold text-white text-center
            w-20 h-6
            rounded-md
            active:translate-y-1"
          >
            Upgrade
          </button>
        </div>
      </Link>

      <h3 className="text-base text-graybrown font-semibold my-4">
        Attributes
      </h3>
      <div className="flex flex-col items-start gap-3">
        {Object.values(attributes).map((attribute: any) => (
          <div className="flex items-center gap-2" key={attribute.displayName}>
            <div
              className="w-[1.6875rem] h-[1.6875rem] bg-lightpurple 
            text-coolblue text-xs font-bold text-center rounded-[50%]
            leading-[1.6875rem]"
            >
              {attribute.value}
            </div>
            <span className="font-bold text-sm text-graybrown2">
              {attribute.displayName}
            </span>
          </div>
        ))}
      </div>
      <h3 className="text-base text-graybrown font-semibold my-4">Skills</h3>
    </div>
  )
}

export default Profile
