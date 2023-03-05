import { shuffleArray } from '@Functions/generalUtils'
import {
  getWordCorrects,
  getWordExposures,
  getWordIncorrects,
  getWordInCorrectsExposuresRatio
} from '@Functions/wordUtils'
import { words } from './data'
import { enums } from './enums'

const { CORRECT, INCORRECT, REVEAL } = enums

// let formattedWords = [
//   {
//     id: 1,
//     content: {
//       word: 'zivot',
//       meaning: 'life'
//     },
//     stats: {
//       exposures: 3,
//       corrects: 1,
//       incorrects: 1,
//       reveals: 1
//     },
//     history: [
//       { time: 1676728636766, result: CORRECT },
//       { time: 1676728647491, result: REVEAL },
//       { time: 1676728653148, result: INCORRECT }
//     ]
//   }
// ]

const formattedWords = words.map(word => {
  const { history } = word

  const corrects = history.filter(h => h.result === CORRECT).length
  const incorrects = history.filter(h => h.result === INCORRECT).length
  const reveals = history.filter(h => h.result === REVEAL).length
  const exposures = corrects + incorrects + reveals

  return {
    ...word,
    stats: {
      exposures: exposures,
      corrects: corrects,
      incorrects: incorrects,
      reveals: reveals
    }
  }
})

// console.log(formattedWords)

function selectWord(words, turn) {
  const shuffledWords = shuffleArray(words)

  // Cycle: le - hie - random - random - hie - mc ...
  if (turn % 4 === 0) {
    return selectLeastExposures(shuffledWords)
  }
  if (turn % 4 === 1) {
    return selectHighestIncorrectsExposuresRatio(shuffledWords)
  }
  if (turn % 4 === 2) {
    return selectRandom(shuffledWords)
  }
  if (turn % 4 === 3) {
    return selectRandom(shuffledWords)
  }
  if (turn % 4 === 4) {
    return selectHighestIncorrectsExposuresRatio(shuffledWords)
  }
  if (turn % 4 === 5) {
    return selectMostCorrects(shuffledWords)
  }
}

function selectRandom(words) {
  return words.at(Math.floor(Math.random() * words.length - 1))
}

function selectLeastExposures(words) {
  const wordWithLeastExposures = words.reduce((min, word) => {
    return getWordExposures(word) < getWordExposures(min) ? word : min
  }, words[0])

  return wordWithLeastExposures
}

function selectMostCorrects(words) {
  const wordWithMostCorrects = words.reduce((min, word) => {
    return getWordCorrects(word) > getWordCorrects(min) ? word : min
  }, words[0])

  return wordWithMostCorrects
}

function selectHighestIncorrectsExposuresRatio(words) {
  let ratios = words.map(word => ({
    ...word,
    ratio: getWordInCorrectsExposuresRatio(word)
  }))
  ratios.sort((a, b) => {
    if (a.ratio > b.ratio) return -1
    if (a.ratio < b.ratio) return 1
    // in case of ties, prioritize words with higher incorrects
    if (getWordIncorrects(a) > getWordIncorrects(b)) return -1
    if (getWordIncorrects(a) < getWordIncorrects(b)) return 1
    return 0
  })
  return ratios[0]
}

// console.log(selectHighestRatioIncorrectsToExposures(formattedWords))

export { selectWord }
