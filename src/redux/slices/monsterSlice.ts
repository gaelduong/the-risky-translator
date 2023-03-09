import { createSlice } from '@reduxjs/toolkit'
import { Monster } from '@Types/monster'
import { MonstersData } from '@Data/monsterData'

const storedMonsters = localStorage.getItem('monsters')
const initialState = storedMonsters ? JSON.parse(storedMonsters) : MonstersData

export const monstersSlice = createSlice({
  name: 'monsters',
  initialState,
  reducers: {
    updateMonsterBeaten: (state, action) => {
      const monsterId = action.payload.id
      const monsterIndex = state.findIndex(
        (monster: Monster) => monster.id === monsterId
      )
      if (monsterIndex !== -1) {
        state[monsterIndex].isBeaten = true
        localStorage.setItem('monsters', JSON.stringify(state))
      }
    }
  }
})

export const { updateMonsterBeaten } = monstersSlice.actions

export default monstersSlice.reducer
