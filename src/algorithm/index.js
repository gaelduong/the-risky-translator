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

function selectWord(words) {
  return selectRandom(words)
}

function selectRandom(words) {
  return words.at(Math.floor(Math.random() * words.length - 1))
}

function selectLeastExposuresWord(words) {
  const wordWithLeastExposures = words.reduce((min, word) => {
    return word.stats.exposures < min.stats.exposures ? word : min
  }, words[0])

  return wordWithLeastExposures
}

function selectHighestRatioIncorrectsToExposures(words) {
  let ratios = words.map(word => ({
    ...word,
    ratio:
      word.stats.exposures > 0
        ? word.stats.incorrects / word.stats.exposures
        : 0
  }))
  ratios.sort((a, b) => {
    if (a.ratio > b.ratio) return -1
    if (a.ratio < b.ratio) return 1
    // in case of ties, prioritize words with fewer exposures
    if (a.stats.exposures < b.stats.exposures) return -1
    if (a.stats.exposures > b.stats.exposures) return 1
    return 0
  })
  return ratios[0]
}

// console.log(selectHighestRatioIncorrectsToExposures(formattedWords))

export { selectWord }
