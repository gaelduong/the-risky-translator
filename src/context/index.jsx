import React, { createContext, useReducer } from 'react'
import { WORDS } from '../data/items'

// Create a context to hold the money state and dispatch function
export const AppContext = createContext()

const resultsMap = {
  CORRECT: 'corrects',
  INCORRECT: 'incorrects',
  REVEAL: 'reveals'
}

const initialState = { money: 0, items: WORDS }

// Define the reducer functions for each state
const appReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { ...state, money: state.money + 1 }
    case 'DECREMENT':
      return { ...state, money: state.money - 5 }
    case 'TRACK_ACTIVITY':
      const { id, log } = action.payload
      const key = resultsMap[log.result]
      return {
        ...state,
        items: state.items.map(item => {
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
