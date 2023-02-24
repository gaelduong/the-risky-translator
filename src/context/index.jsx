import React, { createContext, useReducer } from 'react'
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
  energy: parseInt(localStorage.getItem('energy')) || 1000,
  vocabulary: JSON.parse(localStorage.getItem('vocabulary')) || WORDS,
  // items: JSON.parse(localStorage.getItem('items')) || ITEMS
  items: ITEMS
}

// Define the reducer functions for each state
const appReducer = (state, action) => {
  switch (action.type) {
    case 'UPDATE_MONEY':
      // Update local storage
      localStorage.setItem('money', state.money + action.payload)
      return { ...state, money: state.money + action.payload }

    case 'RESET_MONEY':
      return { ...state, money: 0 }

    case 'UPDATE_ENERGY':
      // Update local storage
      localStorage.setItem('energy', state.energy + action.payload)
      return { ...state, energy: Math.max(0, state.energy + action.payload) }

    case 'RESET_ENERGY':
      return { ...state, energy: 0 }

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
            isBought: true
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

    case 'START_GENERATE':
      const startTime = Date.now()
      const updatedItemsBeforeGenerate = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            generate: {
              ...item.generate,
              inProgress: true,
              times: {
                startTime,
                endTime: new Date(
                  startTime + item.generate.timeRequiredInSeconds * 1000
                ).getTime()
              }
            }
          }
        }

        return item
      })
      localStorage.setItem('items', JSON.stringify(updatedItemsBeforeGenerate))

      return { ...state, items: updatedItemsBeforeGenerate }

    case 'END_GENERATE':
      const updatedItemsAfterGenerate = state.items.map(item => {
        if (item.id === action.payload.id) {
          return {
            ...item,
            generate: {
              ...item.generate,
              inProgress: false,
              times: {
                startTime: null,
                endTime: null
              }
            }
          }
        }

        return item
      })
      localStorage.setItem('items', JSON.stringify(updatedItemsAfterGenerate))

      return { ...state, items: updatedItemsAfterGenerate }

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
