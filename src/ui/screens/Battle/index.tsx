import { useState, useEffect } from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

// Redux
import { useDispatch, useSelector } from 'react-redux'
import { updateMoney } from '@Redux/slices/resourceSlice'
import { updateMonsterBeaten } from '@Redux/slices/monsterSlice'

// Assets
import { creatureImage, monsterImage } from '@Asset/images'
import ProgressBar from '@Com/shared/ProgressBar'

// Routes
import { ROUTE } from '@Route/index'

enum BATTLE_STATUSES {
  NOT_STARTED = 'NOT_STARTED',
  IN_PROGRESS = 'IN_PROGRESS',
  END = 'END'
}

const Battle = () => {
  //   Start & end battle
  const [battleStatus, setBattleStatus] = useState(BATTLE_STATUSES.NOT_STARTED)
  const [countDown, setCountDown] = useState(3)
  const [resultMessage, setResultMessage] = useState(<></>)

  const navigate = useNavigate()
  const dispatch = useDispatch()

  //   Creature
  const {
    creature: { attributes }
  } = useSelector((state: any) => state)
  const creatureHealth: number = attributes.health.value
  const creaturePower: number = attributes.power.value
  const [creatureHp, setCreatureHp] = useState(creatureHealth)
  const [creatureCooldown, setCreatureCooldown] = useState(0)
  const [isCreatureJiggling, setCreatureIsJiggling] = useState(false)

  // Monster
  const { state: customProps } = useLocation()
  const {
    id: monsterId,
    name: monsterName,
    attributes: monsterAttributes
  } = customProps

  const monsterPower = monsterAttributes.power
  const [monsterHp, setMonsterHp] = useState(monsterAttributes.health)
  const [monsterCooldown, setMonsterCooldown] = useState(0)
  const [isMonsterJiggling, setIsMonsterJiggling] = useState(false)

  const handleLeaveBattle = (result: any) => {
    if (result.won) {
      dispatch(updateMoney({ amount: result.reward.money }))
    }
    setTimeout(() => {
      navigate(ROUTE.MONSTER_MAP.path)
    }, 200)
  }

  // Count down before battle starts
  useEffect(() => {
    if (countDown === 0) {
      setBattleStatus(BATTLE_STATUSES.IN_PROGRESS)
    } else {
      const timer = setInterval(() => {
        setCountDown(countDown => countDown - 1)
      }, 1000)
      return () => clearTimeout(timer)
    }
  }, [countDown])

  useEffect(() => {
    if (monsterHp <= 0 || creatureHp <= 0) {
      setBattleStatus(BATTLE_STATUSES.END)
    }

    // Win
    if (monsterHp <= 0) {
      dispatch(updateMonsterBeaten({ id: monsterId }))
      setResultMessage(
        <>
          <h2 className="text-xl font-bold">Congrats...you won!</h2>
          <button
            data-start-sound
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded-full"
            onClick={() =>
              handleLeaveBattle({ won: true, reward: { money: 25 } })
            }
          >
            Earn 25C
          </button>
        </>
      )
      return
    }

    // Lose
    if (creatureHp <= 0) {
      setResultMessage(
        <>
          <h2 className="text-xl font-bold">Oof! You lost...</h2>
          <button
            className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-1 px-4 rounded-full"
            onClick={() => handleLeaveBattle({ won: false, reward: null })}
          >
            Leave
          </button>
        </>
      )
      return
    }
  }, [monsterHp, creatureHp, monsterId, dispatch])

  // Update Creature's cooldown
  useEffect(() => {
    if (battleStatus !== BATTLE_STATUSES.IN_PROGRESS) return
    if (creatureCooldown > 0) {
      const timer = setTimeout(() => {
        setCreatureCooldown(creatureCooldown - 100) // Decrease creatureCooldown time by 100ms every 100ms
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [creatureCooldown, battleStatus])

  // Update Monster's cooldown
  useEffect(() => {
    if (battleStatus !== BATTLE_STATUSES.IN_PROGRESS) return
    if (monsterCooldown > 0) {
      const timer = setTimeout(() => {
        setMonsterCooldown(monsterCooldown - 100) // Decrease monster's cooldown time by 100ms every 100ms
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [monsterCooldown, battleStatus])

  // Monster's attack every second
  useEffect(() => {
    if (battleStatus !== BATTLE_STATUSES.IN_PROGRESS) return
    const monsterTimer = setInterval(() => {
      monsterAttack()
    }, 1000)
    return () => clearInterval(monsterTimer)
  }, [battleStatus])

  const creatureAttack = () => {
    if (battleStatus !== BATTLE_STATUSES.IN_PROGRESS) return
    if (creatureCooldown > 0) return

    // Deal damage to monster
    const damage = creaturePower
    setMonsterHp((monsterHp: number) => monsterHp - damage)
    setCreatureCooldown(1000)

    // Animation Monster Shaking
    if (!isMonsterJiggling) {
      setIsMonsterJiggling(true)
      setTimeout(() => {
        setIsMonsterJiggling(false)
      }, 1000)
    } else {
      setIsMonsterJiggling(false)
      setTimeout(() => {
        setIsMonsterJiggling(true)
      }, 50)
    }
  }

  const monsterAttack = () => {
    if (monsterCooldown > 0) return

    // Deal damage to creature
    const damage = monsterPower
    setCreatureHp(creatureHp => creatureHp - damage)
    setMonsterCooldown(1000)

    // Animation Creature Shaking
    if (!isCreatureJiggling) {
      setCreatureIsJiggling(true)
      setTimeout(() => {
        setCreatureIsJiggling(false)
      }, 500)
    } else {
      setCreatureIsJiggling(false)
      setTimeout(() => {
        setCreatureIsJiggling(true)
      }, 50)
    }

    // Trigger vibration if available (mobile)
    if ('vibrate' in navigator) {
      const vibrate = () => navigator.vibrate(100)
      window.addEventListener('click', vibrate, { once: true })
    }
  }

  return (
    <div className="flex flex-col items-center gap-5">
      {/* Monster */}
      <div>
        <h4 className="text-xl font-bold mb-6">{monsterName}</h4>
        <div>Cooldown: {(monsterCooldown / 1000).toFixed(2)}</div>

        {/* Progress bar */}
        <ProgressBar
          progress={monsterHp / monsterAttributes.health}
          color="#F05E67"
        />
        <div>
          {Math.max(monsterHp, 0)}/{monsterAttributes.health}
        </div>
        <div data-attack-sound onClick={creatureAttack}>
          <img
            className={`w-[200px] ${
              isMonsterJiggling
                ? 'animate-[wiggle_1s_ease-in-out_infinite]'
                : ''
            }`}
            src={monsterImage}
            alt="monster"
          />
        </div>
      </div>

      {/* Countdown */}
      {battleStatus === BATTLE_STATUSES.NOT_STARTED ? (
        <h2 className="text-2xl font-bold">Fight in {countDown} ... </h2>
      ) : battleStatus === BATTLE_STATUSES.IN_PROGRESS ? (
        <h2> </h2>
      ) : (
        resultMessage
      )}

      {/* Creature */}
      <div>
        <div>Cooldown: {(creatureCooldown / 1000).toFixed(2)}</div>
        <ProgressBar progress={creatureHp / creatureHealth} color="#5EB3F0" />
        <div>
          {Math.max(creatureHp, 0)}/{creatureHealth}
        </div>
        <img
          className={`w-[200px]  ${
            isCreatureJiggling ? 'animate-[wiggle_1s_ease-in-out_infinite]' : ''
          }`}
          src={creatureImage}
          alt="creature"
        />
      </div>
    </div>
  )
}

export default Battle
