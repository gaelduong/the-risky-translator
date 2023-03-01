import { configureStore } from '@reduxjs/toolkit'
import resourceSlice from '../slices/resourceSlice'
import vocabularySlice from '../slices/vocabularySlice'

export const store = configureStore({
  reducer: {
    resource: resourceSlice,
    vocabulary: vocabularySlice
  }
})
