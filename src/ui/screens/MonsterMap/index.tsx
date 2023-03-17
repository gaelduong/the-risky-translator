import { coinImage, monsterImage } from '@Asset/images'
import CustomBackIcon from '@Com/shared/CustomBackIcon'
import { capitalizeFirstLetter } from '@Function/generalUtils'
import {
  getIsMonsterUnlocked,
  getRequiredMonstersToBeat
} from '@Function/monsterUtils'
import useClickSound from '@Hook/useClickSound'
import { updateMoney } from '@Redux/slices/resourceSlice'
import { Monster } from '@Type/monster'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { useLocation, useNavigate } from 'react-router-dom'
import { ROUTE } from '@Route/index'

const Popup = ({ customProps, onClose }: any) => {
  useClickSound('data-press-sound')

  const navigate = useNavigate()

  const { money } = useSelector((state: any) => state.resource)
  const { monster, monsters } = customProps
  const { name, attributes, battleReqs } = monster

  const dispatch = useDispatch()

  const handleEnterBattle = (battleReqs: any, monster: Monster) => {
    dispatch(updateMoney({ amount: -battleReqs.money }))
    navigate(ROUTE.BATTLE.path, { state: monster })
  }

  const monsterUnlocked = getIsMonsterUnlocked(monsters, monster)

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
            <div
              key={attributeKey}
              className="flex items-center justify-between mb-4"
            >
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
            <button
              data-press-sound
              disabled={money < battleReqs.money}
              onClick={() => handleEnterBattle(battleReqs, monster)}
              className="w-full py-2 mb-4 flex items-center justify-center gap-1 text-white font-semibold rounded-md bg-blue-500 hover:bg-blue-600 disabled:bg-slate-300"
            >
              <span>Battle! -{battleReqs.money}</span>
              <img className="w-4" src={coinImage} alt="money" />
            </button>
          ) : (
            <p className="mb-4">
              Need to beat:{' '}
              {getRequiredMonstersToBeat(monsters, monster).map((m: any) => (
                <span key={m.name}>{m.name}</span>
              ))}
            </p>
          )}

          <button
            data-press-sound
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
              <div
                data-press-sound
                onClick={() => handleOpenPopup(monster.name)}
              >
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
