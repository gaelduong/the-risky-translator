export type Word = {
  id: number
  content: {
    word: string
    meaning: string
    long_meaning: string
    examples: string[]
    audio: any
    groups: number[]
  }
  history: any[]
  stats: {
    exposures: number
    corrects: number
    incorrects: number
    reveals: number
  }
}
