import { LocationData } from '../data/locationData'

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

const getWordStats = item => {
  return item.stats
}

const getWordActivityHistory = item => {
  return item.history
}

const getWordListPool = (words, locationId) => {
  const location = LocationData.find(location => location.id === locationId)
  const {
    partition: { start, end }
  } = location
  return words.slice(start, end)
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

export {
  getWordId,
  getWordText,
  getWordMeaning,
  getWordStats,
  getWordActivityHistory,
  getWordListPool,
  getRandomWordList
}
