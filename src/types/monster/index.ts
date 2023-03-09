export type Monster = {
  id: number
  name: string
  attributes: {
    health: number
    defence: number
    power: number
    accuracy: number
    attackCount: number
    cooldown: number
  }
  battleReqs: {
    energy: number
    monsterIdsToBeat: number[]
  }
  isBeaten: boolean
}
