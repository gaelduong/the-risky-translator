import { createSlice } from '@reduxjs/toolkit'

export const resourceSlice = createSlice({
  name: 'resource',
  initialState: {
    money: 0,
    energy: 0
  },
  reducers: {
    updateMoney: (state, action) => {
      state.money += action.payload.amount
      localStorage.setItem('money', state.money)
    },
    resetMoney: state => {
      state.money = 0
      localStorage.setItem('money', state.money)
    },
    updateEnergy: (state, action) => {
      state.energy += action.payload.amount
      localStorage.setItem('energy', state.energy)
    },
    resetEnergy: state => {
      state.energy = 0
      localStorage.setItem('energy', state.energy)
    }
  }
})

export const { updateMoney, resetMoney, updateEnergy, resetEnergy } =
  resourceSlice.actions

export default resourceSlice.reducer
