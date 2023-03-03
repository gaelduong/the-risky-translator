import { MonstersData } from '@Data/monsterData'

import { createSlice } from '@reduxjs/toolkit'

export const monstersSlice = createSlice({
  name: 'monsters',
  initialState: JSON.parse(localStorage.getItem('monsters')) || MonstersData,
  reducers: {
    updateMonsterBeaten: (state, action) => {
      const monsterId = action.payload.id
      const monsterIndex = state.findIndex(monster => monster.id === monsterId)
      if (monsterIndex !== -1) {
        state[monsterIndex].isBeaten = true
        localStorage.setItem('monsters', JSON.stringify(state))
      }
    }
  }
})

export const { updateMonsterBeaten } = monstersSlice.actions

export default monstersSlice.reducer
