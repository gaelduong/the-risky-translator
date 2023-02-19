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

export {
  getWordId,
  getWordText,
  getWordMeaning,
  getWordStats,
  getWordActivityHistory,
  getWordListPool
}
