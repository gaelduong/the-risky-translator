import { Monster } from '@Type/monster'

const getMonsterById = (monsters: Monster[], id: number) => {
  return monsters.find(monster => monster.id === id)
}

const getMonsterIsBeaten = (monster: Monster) => {
  return monster.isBeaten
}

const getIsMonsterUnlocked = (monsters: Monster[], currentMonster: Monster) => {
  const shouldBeatMonsterIds = currentMonster.battleReqs.monsterIdsToBeat

  return shouldBeatMonsterIds.every(monsterId => {
    const currentMonster = monsters.find(monster => monster.id === monsterId)
    if (!currentMonster) return false
    return getMonsterIsBeaten(currentMonster)
  })
}

const getRequiredMonstersToBeat = (monsters: Monster[], monster: Monster) => {
  return monster.battleReqs.monsterIdsToBeat.map(monsterIdToBeat =>
    getMonsterById(monsters, monsterIdToBeat)
  )
}

export { getMonsterById, getIsMonsterUnlocked, getRequiredMonstersToBeat }
