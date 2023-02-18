import React, { createContext, useReducer } from 'react'

// Create a context to hold the money state and dispatch function
export const AppContext = createContext()

const moneyInitialState = { money: 0 }
const languageInitialState = { language: 'en' }

// Define the reducer functions for each state
const moneyReducer = (state, action) => {
  switch (action.type) {
    case 'INCREMENT':
      return { money: state.money + 1 }
    case 'DECREMENT':
      return { money: state.money - 5 }
    default:
      return state
  }
}

const languageReducer = (state, action) => {
  switch (action.type) {
    case 'setLanguage':
      return { language: action.payload }
    default:
      return state
  }
}

// Combine the reducers into a single reducer function
const combinedReducers = (state, action) => {
  return {
    money: moneyReducer(state.money, action),
    language: languageReducer(state.language, action)
  }
}
// Create a provider component to wrap around the rest of the app
export function AppProvider(props) {
  const [state, dispatch] = useReducer(combinedReducers, {
    money: moneyInitialState,
    language: languageInitialState
  })

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {props.children}
    </AppContext.Provider>
  )
}
