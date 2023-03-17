export const MonstersData = [...Array(30)].map((_, index) => {
  const health = 10 + index * index
  const defence = 10 + index * index
  const power = 1 + index * index
  const energyRequired = 0
  const moneyRequired = 10
  const monsterIdsToBeat = index === 0 ? [] : [index - 1]

  return {
    id: index,
    name: `Monster ${index}`,
    attributes: {
      health,
      defence,
      power,
      accuracy: 1,
      attackCount: 1,
      cooldown: 0.2
    },
    battleReqs: {
      energy: energyRequired,
      money: moneyRequired,
      monsterIdsToBeat
    },
    isBeaten: false
  }
})
