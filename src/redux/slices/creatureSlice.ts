import { CreatureData } from '@Data/creatureData'
import {
  getAttributeMaxLevel,
  getAttributeValueAtLevel
} from '@Function/attributeUtils'
import { createSlice } from '@reduxjs/toolkit'

const storedCreature = localStorage.getItem('creature')
const initialState = storedCreature ? JSON.parse(storedCreature) : CreatureData

export const creatureSlice = createSlice({
  name: 'creature',
  initialState,
  reducers: {
    updateName: (state, action) => {
      state.name = action.payload.name
      localStorage.setItem('creature', JSON.stringify(state))
    },

    upgradeAttribute: (state, action) => {
      // Exit when providing invalid attribute
      const { attribute } = action.payload
      if (!Object.keys(state.attributes).includes(attribute)) return

      const maxLevel = getAttributeMaxLevel(attribute)

      // Next level cannot be higher than max level
      const currentLevel = state.attributes[attribute].level
      if (currentLevel + 1 > maxLevel) return

      state.attributes[attribute] = {
        ...state.attributes[attribute],
        value: getAttributeValueAtLevel(attribute, currentLevel + 1),
        level: currentLevel + 1
      }
      localStorage.setItem('creature', JSON.stringify(state))
    }
  }
})

export const { updateName, upgradeAttribute } = creatureSlice.actions

export default creatureSlice.reducer
