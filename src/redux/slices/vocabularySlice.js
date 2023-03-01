import { createSlice } from '@reduxjs/toolkit'
import { WORDS } from '@Data/wordData'

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState: {
    vocabulary: JSON.parse(localStorage.getItem('vocabulary')) || WORDS
  },
  reducers: {}
})

export const {} = vocabularySlice.actions

export default vocabularySlice.reducer
