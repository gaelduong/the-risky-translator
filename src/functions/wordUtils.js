import { LocationData } from '@Data/locationData'
import { shuffleArray } from './generalUtils'

const getWordId = item => {
  if (typeof item !== 'object' || !item) return -1
  if (!(typeof item.id === 'number' && !isNaN(item.id))) return -1
  return item.id
}

const getWordText = item => {
  if (typeof item !== 'object' || !item) return ''
  return item.content?.word || ''
}

const getWordMeaning = item => {
  if (typeof item !== 'object' || !item) return ''
  return item.content?.meaning || ''
}

const getWordLongMeaning = item => {
  if (typeof item !== 'object' || !item) return ''
  return item.content?.long_meaning
}

const getWordAudio = item => {
  if (typeof item !== 'object' || !item) return ''
  return item.content?.audio
}

const getWordStats = item => {
  return item.stats
}

const getWordActivityHistory = item => {
  return item.history
}

const getWordGroups = item => {
  return item.content.groups
}

const getWordCorrectsExposuresRatio = word =>
  word.stats.exposures === 0 ? 0 : word.stats.corrects / word.stats.exposures

const getWordInCorrectsExposuresRatio = word =>
  word.stats.exposures === 0 ? 0 : word.stats.incorrects / word.stats.exposures

const getWordListPool = (allWords, locationId) => {
  if (isNaN(locationId) || locationId == null) return []

  const location = LocationData.find(loc => loc.id === locationId)

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

const getRandomWordList = (words, numWords, exceptWordId = -1) => {
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

const getSortedWordList = (words, sort) => {
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
  getWordActivityHistory,
  getWordListPool,
  getRandomWordList,
  getWordCorrectsExposuresRatio,
  getWordInCorrectsExposuresRatio,
  getSortedWordList
}
