import { useDispatch, useSelector } from 'react-redux'
import { useLocation } from 'react-router-dom'
import {
  getAttributeValueAtLevel,
  getAttributeMaxLevel,
  getAttributeReqsAtLevel
} from '@Function/attributeUtils'
import { upgradeAttribute } from '@Redux/slices/creatureSlice'
import { updateEnergy, updateMoney } from '@Redux/slices/resourceSlice'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { coinImage, creature2Image, energyImage } from '@Asset/images'

const Upgrade = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { creature } = useSelector((state: any) => state)
  const dispatch = useDispatch()

  const { money, energy } = useSelector((state: any) => state.resource)
  const { name, attributes } = creature

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
    <div className="flex flex-col items-center ">
      <CustomBackIcon linkTo="/profile" state={{ townId }} />

      <h2>{name}</h2>
      <img
        className="w-[12rem] -mt-5 max-h-[50%] object-contain"
        src={creature2Image}
        alt="creature"
      />

      <h3 className="text-lg text-graybrown font-semibold my-4">Attributes</h3>

      {Object.keys(attributes).map(key => {
        const attribute = attributes[key]
        const { money: moneyRequired, energy: energyRequired } =
          getAttributeReqsAtLevel(key, attribute.level)

        return (
          <div
            className="inline-grid grid-cols-3 items-center
            px-4 mb-4 gap-4
            text-left text-sm"
            key={key}
          >
            <div className="text-left">
              <div>
                <b>{attribute.displayName}</b>
              </div>
              <div>
                Lv: {attribute.level}/{getAttributeMaxLevel(key)}
              </div>
            </div>

            <span>
              <span className="font-bold text-neutral-600">
                {attribute.value}
              </span>
              {' → '}
              <span className="font-bold text-green-600">
                {getAttributeValueAtLevel(key, attribute.level + 1)}
              </span>
            </span>

            <span>
              <button
                className="bg-green-600 h-6
                text-white font-semibold  
                border-none rounded-md
                py-[0.2rem] px-2 
                disabled:bg-[#d6ddd770] disabled:text-[#7b7b7b]
                active:bg-[#307032] active:shadow-gray-300 active:translate-y-0.5"
                disabled={money < moneyRequired || energy < energyRequired}
                onClick={() =>
                  handleUpgradeAttribute(key, moneyRequired, energyRequired)
                }
              >
                <div className="flex items-center gap-1 ">
                  {moneyRequired}
                  <img src={coinImage} className="w-3" alt="coin" />
                  {energyRequired}{' '}
                  <img src={energyImage} className="w-3" alt="energy" />
                </div>
              </button>
            </span>
          </div>
        )
      })}

      <h3 className="text-lg text-graybrown font-semibold my-4">Skills</h3>
    </div>
  )
}

export default Upgrade
