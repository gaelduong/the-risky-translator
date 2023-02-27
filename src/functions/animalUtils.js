const getAnimalId = item => {
  return item.id
}

const getAnimalName = item => {
  return item.name
}

const getAnimalDescription = item => {
  return item.description
}

const getAnimalIsBought = item => {
  return item.isBought
}

const getAnimalBuyRequirements = item => {
  return item.buyRequirements
}

const formatNumberWithCommas = number => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ',')
}

export {
  getAnimalId,
  getAnimalName,
  getAnimalDescription,
  getAnimalIsBought,
  getAnimalBuyRequirements,
  formatNumberWithCommas
}
