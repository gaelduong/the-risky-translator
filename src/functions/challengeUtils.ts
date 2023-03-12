import { CHALLENGES } from '@Constant/index'

const getChallengeType = (challenge: any) => {
  return challenge.challengeType
}

const getChallengeTitle = (challenge: any) => {
  return challenge.challengeTitle
}

const getChallengeCurrentStatus = (challenge: any) => {
  return challenge.challengeCurrentStatus
}

const getChallengeResultRequired = (challenge: any) => {
  return challenge.challengeResultRequired
}

const getChallengeCleared = (challenge: any) => {
  return challenge.challengeCleared
}

const getCurrentChallenge = (locationId: number, allChallenges: any[]) => {
  const locationChallenges = allChallenges[locationId]

  return (
    locationChallenges.find(
      (challenge: any) => !getChallengeCleared(challenge)
    ) || null
  )
}

const getChallengeCurrentStatusDisplay = (challenge: any) => {
  const challengeType = getChallengeType(challenge)
  const challengeResultRequired = getChallengeResultRequired(challenge)
  const challengeCurrentStatus = getChallengeCurrentStatus(challenge)

  if (challengeType === CHALLENGES.CONSECUTIVE) {
    return `${challengeCurrentStatus.correct}/${challengeResultRequired.correct} consecutive corrects`
  }

  if (challengeType === CHALLENGES.PERCENTAGE) {
    return `${challengeCurrentStatus.correct}/${challengeCurrentStatus.total} corrects`
  }
}

export {
  getChallengeType,
  getChallengeTitle,
  getChallengeCurrentStatus,
  getChallengeResultRequired,
  getChallengeCleared,
  getCurrentChallenge,
  getChallengeCurrentStatusDisplay
}
