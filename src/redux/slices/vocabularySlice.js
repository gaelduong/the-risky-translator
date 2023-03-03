import { createSlice } from '@reduxjs/toolkit'
import { WordsData } from '@Data/wordData'

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState: {
    vocabulary: JSON.parse(localStorage.getItem('vocabulary')) || WordsData
  },
  reducers: {}
})

export const {} = vocabularySlice.actions

export default vocabularySlice.reducer
