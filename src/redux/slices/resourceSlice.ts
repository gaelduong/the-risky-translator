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
      localStorage.setItem('money', state.money.toString())
    },
    resetMoney: state => {
      state.money = 0
      localStorage.setItem('money', state.money.toString())
    },
    updateEnergy: (state, action) => {
      state.energy += action.payload.amount
      localStorage.setItem('energy', state.energy.toString())
    },
    resetEnergy: state => {
      state.energy = 0
      localStorage.setItem('energy', state.energy.toString())
    }
  }
})

export const { updateMoney, resetMoney, updateEnergy, resetEnergy } =
  resourceSlice.actions

export default resourceSlice.reducer
