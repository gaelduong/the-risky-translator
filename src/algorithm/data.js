import { enums } from './enums'

const { CORRECT, INCORRECT, REVEAL } = enums

export const words = [
  {
    id: 1,
    content: {
      word: 'zivot',
      meaning: 'life'
    },
    history: [
      { time: 1676728636766, result: CORRECT },
      { time: 1676728647491, result: REVEAL },
      { time: 1676728653148, result: INCORRECT }
    ]
  },
  {
    id: 1,
    word: 'zabava',
    meaning: 'entertainment',
    history: [
      { time: 1676729700000, result: 'INCORRECT' },
      { time: 1676729800000, result: 'REVEAL' },
      { time: 1676729900000, result: 'CORRECT' },
      { time: 1676730000000, result: 'CORRECT' },
      { time: 1676730100000, result: 'CORRECT' }
    ]
  },
  {
    id: 2,
    word: 'ljubav',
    meaning: 'love',
    history: [
      { time: 1676728236766, result: 'CORRECT' },
      { time: 1676728347491, result: 'REVEAL' },
      { time: 1676728553148, result: 'INCORRECT' }
    ]
  },
  {
    id: 3,
    word: 'svijet',
    meaning: 'world',
    history: [
      { time: 1676728536766, result: 'CORRECT' },
      { time: 1676728647291, result: 'REVEAL' },
      { time: 1676728753148, result: 'CORRECT' },
      { time: 1676728893148, result: 'INCORRECT' }
    ]
  },
  {
    id: 4,
    word: 'sunce',
    meaning: 'sun',
    history: [
      { time: 1676728296766, result: 'CORRECT' },
      { time: 1676728447491, result: 'REVEAL' },
      { time: 1676728553148, result: 'CORRECT' }
    ]
  },
  {
    id: 5,
    word: 'mjesec',
    meaning: 'moon',
    history: [
      { time: 1676728886766, result: 'CORRECT' },
      { time: 1676728947291, result: 'REVEAL' },
      { time: 1676728953148, result: 'INCORRECT' },
      { time: 1676729053148, result: 'CORRECT' }
    ]
  },
  {
    id: 6,
    word: 'more',
    meaning: 'sea',
    history: [
      { time: 1676728637766, result: 'REVEAL' },
      { time: 1676728747591, result: 'INCORRECT' },
      { time: 1676728763148, result: 'CORRECT' },
      { time: 1676728893148, result: 'CORRECT' }
    ]
  },
  {
    id: 7,
    word: 'planina',
    meaning: 'mountain',
    history: [
      { time: 1676728531766, result: 'REVEAL' },
      { time: 1676728642391, result: 'INCORRECT' },
      { time: 1676728751248, result: 'CORRECT' }
    ]
  },
  {
    id: 8,
    word: 'riba',
    meaning: 'fish',
    history: [
      { time: 1676728931766, result: 'REVEAL' },
      { time: 1676728942391, result: 'CORRECT' }
    ]
  },
  {
    id: 9,
    word: 'duh',
    meaning: 'spirit',
    history: [
      { time: 1676729000000, result: 'INCORRECT' },
      { time: 1676729100000, result: 'REVEAL' },
      { time: 1676729200000, result: 'CORRECT' },
      { time: 1676729300000, result: 'INCORRECT' },
      { time: 1676729400000, result: 'CORRECT' }
    ]
  },
  {
    id: 10,
    word: 'poruka',
    meaning: 'message',
    history: [
      { time: 1676729500000, result: 'REVEAL' },
      { time: 1676729600000, result: 'CORRECT' }
    ]
  }
]
