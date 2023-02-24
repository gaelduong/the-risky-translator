const getItemId = item => {
  return item.id
}

const getItemName = item => {
  return item.name
}

const getItemDescription = item => {
  return item.description
}

const getItemIsBought = item => {
  return item.isBought
}

const getItemBuyRequirements = item => {
  return item.buyRequirements
}

const getItemGeneration = item => {
  return item.generate
}

const getItemGenerationInProgress = item => {
  return item.generate.inProgress
}

const formatTime = seconds => {
  const minutes = Math.floor(seconds / 60)
  const remainingSeconds = seconds % 60
  const formattedSeconds =
    remainingSeconds < 10 ? `0${remainingSeconds}` : remainingSeconds
  return `${minutes}:${formattedSeconds}`
}

const formatNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export {
  getItemId,
  getItemName,
  getItemDescription,
  getItemIsBought,
  getItemBuyRequirements,
  getItemGeneration,
  getItemGenerationInProgress,
  formatTime,
  formatNumberWithCommas
}
