import { createSlice } from '@reduxjs/toolkit'
import { WordsData } from '@Data/wordData'

enum WordResultEnum {
  CORRECT = 'corrects',
  INCORRECT = 'incorrects',
  REVEAL = 'reveals'
}

const storedVocabulary = localStorage.getItem('vocabulary')
// const initialState = {
//   vocabulary: storedVocabulary ? JSON.parse(storedVocabulary) : WordsData
// }

const initialState = {
  vocabulary: WordsData
}

// localStorage.setItem('vocabulary', JSON.stringify(initialState.vocabulary))

export const vocabularySlice = createSlice({
  name: 'vocabulary',
  initialState,
  reducers: {
    updateWordStats: (state, action) => {
      const { id, log } = action.payload

      if (!Object.keys(WordResultEnum).includes(log.result)) return
      // @ts-ignore
      const value = WordResultEnum[log.result]
      const wordIndex = state.vocabulary.findIndex(
        (word: any) => word.id === id
      )

      if (wordIndex > -1) {
        state.vocabulary[wordIndex].stats.exposures++
        // @ts-ignore
        state.vocabulary[wordIndex].stats[value]++
      }

      localStorage.setItem('vocabulary', JSON.stringify(state.vocabulary))
    }
  }
})

export const { updateWordStats } = vocabularySlice.actions

export default vocabularySlice.reducer
