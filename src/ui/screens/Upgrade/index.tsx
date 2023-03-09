import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'
import {
  getAttributeValueAtLevel,
  getAttributeMaxLevel,
  getAttributeReqsAtLevel
} from '@Functions/attributeUtils'
import { upgradeAttribute } from '@Redux/slices/creatureSlice'
import { updateEnergy, updateMoney } from '@Redux/slices/resourceSlice'
import CustomBackIcon from '@Com/CustomBackIcon'

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
      <h2>Attributes</h2>

      {Object.keys(creature.attributes).map(key => {
        const attribute = creature.attributes[key]
        const { money: moneyRequired, energy: energyRequired } =
          getAttributeReqsAtLevel(key, attribute.level)

        return (
          <p key={key}>
            <span>{attribute.displayName}</span>,
            <span>
              Lv:{attribute.level}/{getAttributeMaxLevel(key)}
            </span>
            ,
            <span>
              {attribute.value} to{' '}
              {getAttributeValueAtLevel(key, attribute.level + 1)}
            </span>
            <span>
              <button
                disabled={money < moneyRequired || energy < energyRequired}
                onClick={() =>
                  handleUpgradeAttribute(key, moneyRequired, energyRequired)
                }
              >
                Cost:
                {moneyRequired}(M)
                {energyRequired}(E)
              </button>
            </span>
          </p>
        )
      })}

      <h2>Skills</h2>
    </div>
  )
}

export default Upgrade
