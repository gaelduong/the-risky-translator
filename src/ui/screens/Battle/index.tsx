import React, { useState } from 'react'
import { monsterImage } from '@Assets/images'
import { creatureImage } from '@Assets/images'
import { MAIN_CREATURE } from '@Data/creatureData'
import { useEffect } from 'react'
import { Link } from 'react-router-dom'

console.log(MAIN_CREATURE)

const Battle = () => {
  const [isCreatureJiggling, setCreatureIsJiggling] = useState(false)
  const [isJiggling, setIsJiggling] = useState(false)
  const [creatureHp, setCreatureHp] = useState(100)
  const [creatureCooldown, setCreatureCooldown] = useState(0)
  const [monsterHp, setMonsterHp] = useState(100)
  const [monsterCooldown, setMonsterCooldown] = useState(0)

  useEffect(() => {
    setCreatureCooldown(0)
    setMonsterCooldown(0)
  }, [])

  useEffect(() => {
    if (creatureCooldown > 0) {
      const timer = setTimeout(() => {
        setCreatureCooldown(creatureCooldown - 100) // Decrease creatureCooldown time by 100ms every 100ms
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [creatureCooldown])

  useEffect(() => {
    if (monsterCooldown > 0) {
      const timer = setTimeout(() => {
        setMonsterCooldown(monsterCooldown - 100) // Decrease monster's cooldown time by 100ms every 100ms
      }, 100)
      return () => clearTimeout(timer)
    }
  }, [monsterCooldown])

  useEffect(() => {
    const monsterTimer = setInterval(() => {
      handleMonsterAttack() // Call the monster's attack function every second
    }, 1000)
    return () => clearInterval(monsterTimer)
  }, [])

  const attack = () => {
    if (creatureCooldown > 0) return

    if (!isJiggling) {
      setIsJiggling(true)
      setTimeout(() => {
        setIsJiggling(false)
      }, 1000)
    } else {
      setIsJiggling(false)
      setTimeout(() => {
        setIsJiggling(true)
      }, 50)
    }
    const damage = Math.floor(Math.random() * 10) + 1 // Generate random damage between 1-10
    setMonsterHp(monsterHp => monsterHp - damage)

    setCreatureCooldown(1000)
  }

  const handleMonsterAttack = () => {
    if (monsterCooldown <= 0) {
      const damage = Math.floor(Math.random() * 10) + 1 // Generate random damage between 1-10
      console.log(damage)
      setCreatureHp(creatureHp => creatureHp - damage) // Decrease creature's HP by damage amount
      setMonsterCooldown(1000) // Set cooldown time to 1000ms (1 second)

      if ('vibrate' in navigator) {
        // Trigger vibration if available
        const vibrate = () => navigator.vibrate(100)
        window.addEventListener('click', vibrate, { once: true })
      }

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
    }
  }

  return (
    <div>
      <Link to="/monster-map">MonsterMap</Link>

      <div onClick={attack}>
        <div>Cooldown: {monsterCooldown}</div>
        <div>Health: {monsterHp}</div>
        <img
          className={`creature ${isJiggling ? 'jiggle' : ''}`}
          src={monsterImage}
          alt="monster"
        />
      </div>
      <div>
        <div>Cooldown: {creatureCooldown}</div>
        <div>Health: {creatureHp}</div>
        <img
          className={`creature  ${isCreatureJiggling ? 'jiggle' : ''}`}
          src={creatureImage}
          alt="creature"
        />
      </div>
    </div>
  )
}

export default Battle
