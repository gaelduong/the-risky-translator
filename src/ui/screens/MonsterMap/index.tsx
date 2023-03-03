import { monsterImage } from '@Assets/images'
import {
  getIsMonsterUnlocked,
  getMonsterById,
  getRequiredMonstersToBeat
} from '@Functions/monsterUtils'
import { updateEnergy } from '@Redux/slices/resourceSlice'
import { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Link } from 'react-router-dom'

const Popup = ({ customProps, onClose }: any) => {
  const { energy } = useSelector((state: any) => state.resource)
  const { monster, monsters } = customProps
  const { name, attributes, battleReqs } = monster

  const dispatch = useDispatch()

  const handleEnterBattle = (battleReqs: any) => {
    dispatch(updateEnergy({ amount: -battleReqs.energy }))
  }

  if (!getIsMonsterUnlocked(monsters, monster)) {
    const requiredToBeatMonsters = getRequiredMonstersToBeat(monsters, monster)
    console.log(requiredToBeatMonsters)
    return (
      <div className="popup">
        <h3>{name}</h3>
        <p> Attributes</p>
        <div>Health:?</div>
        <div>Defence:?</div>
        <div>Power:?</div>
        <div>Accuracy:?</div>
        <div>Attack Count:?</div>
        <div>Cooldown:?</div>
        <p>
          Need to beat:
          {requiredToBeatMonsters.map((m: any) => (
            <span>{m.name}</span>
          ))}{' '}
        </p>

        <button className="close" onClick={onClose}>
          Close
        </button>
      </div>
    )
  }

  return (
    <div className="popup">
      <h3>{name}</h3>
      <p> Attributes</p>
      <div>Health:{attributes.health}</div>
      <div>Defence:{attributes.defence}</div>
      <div>Power:{attributes.power}</div>
      <div>Accuracy: {attributes.accuracy}</div>
      <div>Attack Count:{attributes.attackCount}</div>
      <div>Cooldown:{attributes.cooldown}</div>
      <Link to="/battle" state={monster}>
        <button
          disabled={energy < battleReqs.energy}
          onClick={() => handleEnterBattle(battleReqs)}
        >
          Battle -{battleReqs.energy}(E)
        </button>
      </Link>

      <button className="close" onClick={onClose}>
        Close
      </button>
    </div>
  )
}

const MonsterMap = () => {
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
      <Link to="/town">BackToTowns</Link>
      <hr></hr>

      <div
        style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}
      >
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
                  className="spotimg"
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
