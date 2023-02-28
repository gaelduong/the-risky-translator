import { createContext, useReducer } from 'react'
import { WORDS } from '../data/wordData'
import { ITEMS } from '../data/itemData'

export const AppContext = createContext()

const resultsMap = {
  CORRECT: 'corrects',
  INCORRECT: 'incorrects',
  REVEAL: 'reveals'
}

const initialState = {
  money: parseInt(localStorage.getItem('money')) || 0,
  energy: parseInt(localStorage.getItem('energy')) || 0,
  vocabulary: JSON.parse(localStorage.getItem('vocabulary')) || WORDS,
  // items: JSON.parse(localStorage.getItem('items')) || ITEMS
  items: JSON.parse(localStorage.getItem('items')) || ITEMS
}

// Define the reducer functions for each state
const appReducer = (state, action) => {
  switch (action.type) {
    case 'TRACK_ACTIVITY':
      const { id, log } = action.payload
      const key = resultsMap[log.result]
      const updatedVocabulary = state.vocabulary.map(item => {
        if (item.id === id) {
          return {
            ...item,
            history: [...item.history, log],
            stats: {
              ...item.stats,
              exposures: item.stats.exposures++,
              [key]: item.stats[key]++
            }
          }
        }
        return item
      })
      // Update local storage
      localStorage.setItem('vocabulary', JSON.stringify(updatedVocabulary))

      return {
        ...state,
        vocabulary: updatedVocabulary
      }
    case 'BUY_ITEM':
      const updatedItems = state.items.map(item => {
        if (item.id === action.payload) {
          return {
            ...item,
            isBought: true,
            generate: {
              ...item.generate,
              lastCollectionTime: Date.now()
            }
          }
        }
        return item
      })

      // Update local storage
      localStorage.setItem('items', JSON.stringify(updatedItems))

      return {
        ...state,
        items: updatedItems
      }

    case 'UPDATE_ITEMS':
      console.log('update items')
      const updatedItems1 = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            generate: {
              ...item.generate,
              ...action.payload.collectionData
            }
          }
        }
        return item
      })

      // Update local storage
      localStorage.setItem('items', JSON.stringify(updatedItems1))

      return {
        ...state,
        items: updatedItems1
      }

    default:
      return state
  }
}

// Create a provider component to wrap around the rest of the app
export function AppProvider(props) {
  const [state, dispatch] = useReducer(appReducer, initialState)

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
