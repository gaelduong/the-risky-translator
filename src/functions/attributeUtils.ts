// import { AttributesData } from '@Data/attributeData'

const getAttributeValueAtLevel = (attribute: string, level: number) => {
  return level * 10
}

const getAttributeReqsAtLevel = (attribute: string, level: number) => {
  return {
    money: 100,
    energy: 10
  }
}

const getAttributeMaxLevel = (attribute: string) => {
  return 99
}

export {
  getAttributeValueAtLevel,
  getAttributeMaxLevel,
  getAttributeReqsAtLevel
}
