import { createSlice } from '@reduxjs/toolkit'
import { ChallengesData } from '@Data/challengeData'
import {
  getChallengeCurrentStatus,
  getChallengeResultRequired,
  getChallengeType
} from '@Function/challengeUtils'
import { ANSWER_RESULT, CHALLENGES } from '@Constant/index'

const storedChallenges = localStorage.getItem('challenges')
const initialState = storedChallenges
  ? JSON.parse(storedChallenges)
  : ChallengesData

localStorage.setItem('challenges', JSON.stringify(initialState))

const updateLocalStorage = (key: string, items: any) => {
  localStorage.setItem(key, JSON.stringify(items))
}

export const challengesSlice = createSlice({
  name: 'challenges',
  initialState,
  reducers: {
    resetChallenge: (state, action) => {
      const { locationId, challenge } = action.payload
      if (!challenge) return

      const locationChallenges = state[locationId]

      const challengeIndex = locationChallenges.findIndex(
        (chall: any) => chall.challengeLevel === challenge.challengeLevel
      )
      const challengeType = getChallengeType(locationChallenges[challengeIndex])

      const status = getChallengeCurrentStatus(
        locationChallenges[challengeIndex]
      )

      if (challengeType === CHALLENGES.CONSECUTIVE) {
        status.correct = 0
      }
      if (challengeType === CHALLENGES.PERCENTAGE) {
        status.correct = 0
        status.total = 0
      }

      updateLocalStorage('challenges', state)
    },
    updateChallenge: (state, action) => {
      const { locationId, challenge, answerResult } = action.payload

      if (!challenge) return
      const locationChallenges = state[locationId]

      const challengeIndex = locationChallenges.findIndex(
        (chall: any) => chall.challengeLevel === challenge.challengeLevel
      )
      const currentChallenge = locationChallenges[challengeIndex]
      const challengeType = getChallengeType(currentChallenge)
      const status = getChallengeCurrentStatus(currentChallenge)
      const resultRequired = getChallengeResultRequired(currentChallenge)

      if (challengeType === CHALLENGES.CONSECUTIVE) {
        if (answerResult === ANSWER_RESULT.CORRECT) {
          status.correct++
          if (status.correct === resultRequired.correct) {
            currentChallenge.challengeCleared = true
          }
        } else if (answerResult === ANSWER_RESULT.INCORRECT) {
          status.correct = 0
        }
      }

      if (challengeType === CHALLENGES.PERCENTAGE) {
        if (answerResult == ANSWER_RESULT.CORRECT) {
          status.correct++
          status.total++
          if (
            status.correct >= resultRequired.correct &&
            status.total <= resultRequired.total
          ) {
            currentChallenge.challengeCleared = true
          }
        } else if (answerResult === ANSWER_RESULT.INCORRECT) {
          status.total++
          if (
            status.total - status.correct >
            resultRequired.total - resultRequired.correct
          ) {
            status.correct = 0
            status.total = 0
          }
        }
      }
      updateLocalStorage('challenges', state)
    }
  }
})

export const { resetChallenge, updateChallenge } = challengesSlice.actions

export default challengesSlice.reducer
