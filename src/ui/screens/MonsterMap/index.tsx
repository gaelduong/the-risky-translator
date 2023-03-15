import { monsterImage } from '@Asset/images'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { capitalizeFirstLetter } from '@Function/generalUtils'
import {
  getIsMonsterUnlocked,
  getRequiredMonstersToBeat
} from '@Function/monsterUtils'
import { updateEnergy } from '@Redux/slices/resourceSlice'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link, useLocation } from 'react-router-dom'

const Popup = ({ customProps, onClose }: any) => {
  const { energy } = useSelector((state: any) => state.resource)
  const { monster, monsters } = customProps
  const { name, attributes, battleReqs } = monster

  const dispatch = useDispatch()

  const handleEnterBattle = (battleReqs: any) => {
    dispatch(updateEnergy({ amount: -battleReqs.energy }))
  }

  const monsterUnlocked = getIsMonsterUnlocked(monsters, monster)

  // if (!getIsMonsterUnlocked(monsters, monster)) {
  //   const requiredToBeatMonsters = getRequiredMonstersToBeat(monsters, monster)
  //   console.log(requiredToBeatMonsters)
  //   return (
  //     <div className="popup">
  //       <h3>{name}</h3>
  //       <p> Attributes</p>
  //       <div>Health:?</div>
  //       <div>Defence:?</div>
  //       <div>Power:?</div>
  //       <div>Accuracy:?</div>
  //       <div>Attack Count:?</div>
  //       <div>Cooldown:?</div>
  //       <p>
  //         Need to beat:
  //         {requiredToBeatMonsters.map((m: any) => (
  //           <span>{m.name}</span>
  //         ))}{' '}
  //       </p>

  //       <button className="close" onClick={onClose}>
  //         Close
  //       </button>
  //     </div>
  //   )
  // }

  return (
    <>
      <div className="absolute z-50 inset-0 bg-gray-900 opacity-50"></div>
      <div
        className="bg-[#f5fbfd] w-[70vw] max-w-[387px] min-w-[350px]
    fixed top-[50vh] left-[50vw] -translate-x-1/2 -translate-y-1/2
    p-5 shadow-md rounded-lg text-center z-50"
      >
        <h2 className="text-2xl font-bold text-gray-700 mb-4">{name}</h2>
        <div>
          {Object.keys(attributes).map((attributeKey: any) => (
            <div className="flex items-center justify-between mb-4">
              <p className="text-lg font-medium text-gray-700">
                {capitalizeFirstLetter(attributeKey)}:
              </p>
              <p className="text-lg font-medium text-gray-900">
                {attributes[attributeKey]}
              </p>
            </div>
          ))}
        </div>
        <div>
          {monsterUnlocked ? (
            <Link to="/battle" state={monster}>
              <button
                disabled={energy < battleReqs.energy}
                onClick={() => handleEnterBattle(battleReqs)}
                className="w-full py-2 mb-4 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600"
              >
                Battle! -{battleReqs.energy}(E)
              </button>
            </Link>
          ) : (
            <p className="mb-4">
              Need to beat:{' '}
              {getRequiredMonstersToBeat(monsters, monster).map((m: any) => (
                <span>{m.name}</span>
              ))}
            </p>
          )}

          <button
            onClick={onClose}
            className="block w-full py-2 text-gray-600 font-semibold rounded-md border border-gray-400 hover:text-gray-800 hover:border-gray-600"
          >
            Close
          </button>
        </div>
      </div>
    </>
  )
}

const MonsterMap = () => {
  const { state } = useLocation()
  const townId = state?.townId || 0

  const { monsters } = useSelector((state: any) => state)

  const [monsterPopups, setMonsterPopups] = useState<{
    [key: string]: boolean
  }>({})

  const handleClosePopup = (monsterName: string) => {
    setMonsterPopups(prevPopups => ({
      ...prevPopups,
      [monsterName]: false
    }))
  }

  const handleOpenPopup = (monsterName: string) => {
    setMonsterPopups(prevPopups => ({
      ...prevPopups,
      [monsterName]: true
    }))
  }

  return (
    <div>
      <CustomBackIcon linkTo={`/town/${townId}`} />

      <div className="inline-grid grid-cols-3 px-8 py-8 gap-5">
        {monsters.map((monster: any) => {
          return (
            <div key={monster.name}>
              <div onClick={() => handleOpenPopup(monster.name)}>
                <img
                  style={{
                    filter: `brightness(${
                      getIsMonsterUnlocked(monsters, monster) ? 1 : 0
                    })`
                  }}
                  src={monsterImage}
                  alt="monster"
                />
              </div>
              <div>{monster.name}</div>
              {monsterPopups[monster.name] && (
                <Popup
                  customProps={{
                    monster,
                    monsters
                  }}
                  onClose={() => handleClosePopup(monster.name)}
                />
              )}
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default MonsterMap
