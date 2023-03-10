import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  getAttributeValueAtLevel,
  getAttributeMaxLevel,
  getAttributeReqsAtLevel
} from '@Function/attributeUtils'
import { upgradeAttribute } from '@Redux/slices/creatureSlice'
import { updateEnergy, updateMoney } from '@Redux/slices/resourceSlice'
import CustomBackIcon from '@Com/CustomBackIcon'
import './index.css'
import { coinImage, creature2Image, energyImage } from '@Asset/images'

const Upgrade = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { creature } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const { money, energy } = useSelector((state: any) => state.resource)
  const { name } = creature

  const handleUpgradeAttribute = (
    attribute: string,
    moneyRequired: number,
    energyRequired: number
  ) => {
    dispatch(upgradeAttribute({ attribute }))
    dispatch(updateMoney({ amount: -moneyRequired }))
    dispatch(updateEnergy({ amount: -energyRequired }))
  }

  return (
    <div>
      <CustomBackIcon linkTo="/profile" state={{ townId }} />

      <h2>{name}</h2>
      <img className="profile-image" src={creature2Image} alt="creature" />

      <h3>Attributes</h3>

      {Object.keys(creature.attributes).map(key => {
        const attribute = creature.attributes[key]
        const { money: moneyRequired, energy: energyRequired } =
          getAttributeReqsAtLevel(key, attribute.level)

        return (
          <div className="upgrade-line" key={key}>
            <div className="upgrade-col-1">
              <div>
                <b>{attribute.displayName}</b>
              </div>
              <div>
                Lv: {attribute.level}/{getAttributeMaxLevel(key)}
              </div>
            </div>

            <span>
              <span className="current-value">{attribute.value}</span>
              {' → '}
              <span className="new-value">
                {getAttributeValueAtLevel(key, attribute.level + 1)}
              </span>
            </span>

            <span>
              <button
                className="upgrade-btn-action"
                disabled={money < moneyRequired || energy < energyRequired}
                onClick={() =>
                  handleUpgradeAttribute(key, moneyRequired, energyRequired)
                }
              >
                <div className="d-flex items-center gap-0 ">
                  {moneyRequired}
                  <img
                    src={coinImage}
                    style={{ width: '0.75rem' }}
                    alt="coin"
                  />
                  {energyRequired}{' '}
                  <img
                    src={energyImage}
                    style={{ width: '0.75rem' }}
                    alt="energy"
                  />
                </div>
              </button>
            </span>
          </div>
        )
      })}

      <h3>Skills</h3>
    </div>
  )
}

export default Upgrade
