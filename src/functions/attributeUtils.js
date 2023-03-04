// import { AttributesData } from '@Data/attributeData'

const getAttributeValueAtLevel = (attribute, level) => {
  return level * 10
}

const getAttributeReqsAtLevel = (attribute, level) => {
  return {
    money: 100,
    energy: 10
  }
}

const getAttributeMaxLevel = attribute => {
  return 99
}

export {
  getAttributeValueAtLevel,
  getAttributeMaxLevel,
  getAttributeReqsAtLevel
}
