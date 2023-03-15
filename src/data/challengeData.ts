import { CHALLENGES } from '@Constant/index'
import { LocationData, LocationType } from './locationData'

const { CONSECUTIVE, PERCENTAGE } = CHALLENGES

export const ChallengesData2 = {
  0: {
    level: 1,
    title: '10 consecontive corrects',
    type: CONSECUTIVE,
    statusRequired: {
      correct: 10
    },
    currentStatus: {
      correct: 0
    },
    unit: 'consecutive corrects',
    isCleared: false,
    reward: {
      energy: 100
    }
  }
}

const bgColors = ['#0074D9', '#FF4136', '#FF851B', '#B10DC9', '#3D9970']

const challengesCreator = (challenges: any[]) => {
  return challenges.map((challenge: any, i) => {
    if (challenge.type === CHALLENGES.CONSECUTIVE) {
      return {
        challengeLevel: i + 1,
        challengeTitle:
          challenge.title ||
          `${challenge.resultRequired.correct} consecutive correct answers`,
        challengeType: CHALLENGES.CONSECUTIVE,
        challengeResultRequired: challenge.resultRequired,
        challengeCurrentStatus: {
          correct: 0
        },
        challengeUnit: 'corrects',
        challengeCleared: false,
        reward: {
          energy: 100
        },
        bgColor: bgColors[i]
      }
    }
    if (challenge.type === CHALLENGES.PERCENTAGE) {
      const correct = challenge.resultRequired.correct
      const total = challenge.resultRequired.total
      return {
        challengeLevel: i + 1,
        challengeTitle: `${correct}/${total} corrects`,
        challengeType: PERCENTAGE,
        challengeResultRequired: {
          correct: correct,
          total: total
        },
        challengeCurrentStatus: {
          correct: 0,
          total: 0
        },
        challengeUnit: 'corrects',
        challengeCleared: false,
        reward: {
          energy: 100
        },
        bgColor: bgColors[i]
      }
    }
    return null
  })
}

const REGULAR_CHALLENGES = challengesCreator([
  {
    type: CHALLENGES.CONSECUTIVE,
    title: 'Get 1 correct answer!',
    resultRequired: {
      correct: 1
    }
  },
  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 5
    }
  },
  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 10
    }
  },
  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 20
    }
  },
  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 50
    }
  }
])

const MIX_CHALLENGES = challengesCreator([
  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 20
    }
  },

  {
    type: CHALLENGES.CONSECUTIVE,
    resultRequired: {
      correct: 50
    }
  },

  {
    type: CHALLENGES.PERCENTAGE,
    resultRequired: {
      correct: 150,
      total: 155
    }
  }
])

const EVERYTHING_CHALLENGES = challengesCreator([
  {
    type: CHALLENGES.PERCENTAGE,
    resultRequired: {
      correct: 980,
      total: 1000
    }
  }
])

export const ChallengesData: any = {}
LocationData.forEach(location => {
  if (location.type === LocationType.REGULAR) {
    ChallengesData[location.id] = REGULAR_CHALLENGES
  }

  if (location.type === LocationType.MIX) {
    ChallengesData[location.id] = MIX_CHALLENGES
  }

  if (location.type === LocationType.EVERYTHING) {
    ChallengesData[location.id] = EVERYTHING_CHALLENGES
  }
})

// console.log(ChallengesData)
