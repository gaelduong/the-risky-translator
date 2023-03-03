const getMonsterById = (monsters, id) => {
  return monsters.find(monster => monster.id === id)
}

const getIsMonsterUnlocked = (monsters, currentMonster) => {
  const shouldBeatMonsterIds = currentMonster.battleReqs.monsterIdsToBeat

  return shouldBeatMonsterIds.every(monsterId => {
    const currentMonster = monsters.find(monster => monster.id === monsterId)
    return currentMonster.isBeaten
  })
}

const getRequiredMonstersToBeat = (monsters, monster) => {
  return monster.battleReqs.monsterIdsToBeat.map(monsterIdToBeat =>
    getMonsterById(monsters, monsterIdToBeat)
  )
}

export { getMonsterById, getIsMonsterUnlocked, getRequiredMonstersToBeat }
