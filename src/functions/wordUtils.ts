import { LocationData } from '@Data/locationData'
import { shuffleArray } from './generalUtils'

import { Word } from '@Types/word'

const getWordId = (word: Word | null) => {
  if (typeof word !== 'object' || !word) return -1
  if (!(typeof word.id === 'number' && !isNaN(word.id))) return -1
  return word.id
}

const getWordText = (word: Word | null) => {
  if (typeof word !== 'object' || !word) return ''
  return word.content?.word || ''
}

const getWordMeaning = (word: Word | null) => {
  if (typeof word !== 'object' || !word) return ''
  return word.content.meaning || ''
}

const getWordLongMeaning = (word: Word | null) => {
  if (typeof word !== 'object' || !word) return ''
  return word.content?.long_meaning
}

const getWordAudio = (word: Word | null) => {
  if (typeof word !== 'object' || !word) return ''
  return word.content?.audio
}

const getWordStats = (word: Word | null) => {
  return word?.stats
}

const getWordActivityHistory = (word: Word | null) => {
  return word?.history || []
}

const getWordGroups = (word: Word) => {
  return word.content.groups
}

const getWordExposures = (word: Word) => word.stats.exposures

const getWordCorrects = (word: Word) => word.stats.corrects

const getWordIncorrects = (word: Word) => word.stats.incorrects

const getWordCorrectsExposuresRatio = (word: Word) =>
  word.stats.exposures === 0 ? 0 : word.stats.corrects / word.stats.exposures

const getWordInCorrectsExposuresRatio = (word: Word) =>
  word.stats.exposures === 0 ? 0 : word.stats.incorrects / word.stats.exposures

const getWordListPool = (allWords: Word[], locationId: number) => {
  if (isNaN(locationId) || locationId == null) return []

  const location = LocationData.find(loc => loc.id === locationId)

  if (!location) return []
  if (location.type === 'EVERYTHING') return [...allWords]

  const locationGroups = location.hasGroups

  const pool = allWords.filter(word => {
    return (
      getWordGroups(word).filter(group => locationGroups.includes(group))
        .length > 0
    )
  })

  return pool
}

const getRandomWordList = (
  words: Word[],
  numWords: number,
  exceptWordId = -1
) => {
  if (numWords > words.length) return []

  const hasExceptWord = exceptWordId !== -1
  const newWords = hasExceptWord
    ? words.filter(word => word.id !== exceptWordId)
    : [...words]

  // Shuffle array
  const shuffled = newWords.sort(() => 0.5 - Math.random())

  // Get sub-array of first n elements after shuffled
  return shuffled.slice(0, numWords)
}

const getSortedWordList = (words: Word[], sort: string) => {
  switch (sort) {
    case 'default':
      return words
    case 'random':
      return shuffleArray(words)
    case 'corrects':
      return [...words].sort((a, b) => b.stats.corrects - a.stats.corrects)
    case 'incorrects':
      return [...words].sort((a, b) => b.stats.incorrects - a.stats.incorrects)
    case 'reveals':
      return [...words].sort((a, b) => b.stats.reveals - a.stats.reveals)
    case 'exposures':
      return [...words].sort((a, b) => b.stats.exposures - a.stats.exposures)
    case 'corrects_exposures_ratio':
      return [...words].sort((a, b) => {
        const aRatio = getWordCorrectsExposuresRatio(a)
        const bRatio = getWordCorrectsExposuresRatio(b)
        return bRatio - aRatio
      })
    case 'incorrects_exposures_ratio':
      return [...words].sort((a, b) => {
        const aRatio = getWordInCorrectsExposuresRatio(a)
        const bRatio = getWordInCorrectsExposuresRatio(b)
        return bRatio - aRatio
      })

    case 'alphabetical':
      return [...words].sort((a, b) =>
        a.content.word.localeCompare(b.content.word)
      )
    default:
      return words
  }
}

export {
  getWordId,
  getWordText,
  getWordMeaning,
  getWordLongMeaning,
  getWordAudio,
  getWordStats,
  getWordCorrects,
  getWordIncorrects,
  getWordExposures,
  getWordActivityHistory,
  getWordListPool,
  getRandomWordList,
  getWordCorrectsExposuresRatio,
  getWordInCorrectsExposuresRatio,
  getSortedWordList
}
