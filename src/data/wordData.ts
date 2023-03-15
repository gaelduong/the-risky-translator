import randomWords from 'random-words'
import { Word } from '@Type/word'
import { spanishWords } from './words/spanish'

// const WordsData1 = words.map((item, index) => {
//   return {
//     id: index,
//     content: item,
//     history: [],
//     stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
//   }
// })

// WordsData1[0] = WordsData1[1]

const englishWords = [
  'actually',
  'after',
  'all',
  'already',
  'answer',
  'ask',
  'available',
  'awesome',
  'back end',
  'better',
  'both',
  'call',
  'cancel',
  'chance',
  'change',
  'clarify',
  'conflict',
  'create',
  'decide',
  'decrease',
  'different',
  'difficult',
  'discussion',
  'done',
  'download',
  'early',
  'easier',
  'error',
  'especially',
  'estimate',
  'evaluate',
  'everything',
  'exactly',
  'example',
  'explain',
  'feel',
  'feeling',
  'file',
  'find',
  'finish',
  'first',
  'focus',
  'forget',
  'forward',
  'free',
  'front end',
  'general',
  'give',
  'great',
  'hold',
  'improve',
  'increase',
  'integrate',
  'invite',
  'involve',
  'item',
  'join',
  'just',
  'language',
  'last',
  'late',
  'maintain',
  'manager',
  'meet',
  'meeting',
  'message',
  'need',
  'option',
  'pattern',
  'perfect',
  'performance',
  'plan',
  'please',
  'point',
  'prefer',
  'presentation',
  'problem',
  'professional',
  'read',
  'reason',
  'remove',
  'return',
  'review',
  'right',
  'role',
  'second',
  'seem',
  'send',
  'setup',
  'short',
  'silence',
  'skip',
  'someone',
  'speak',
  'specific',
  'specifically',
  'survey',
  'talk',
  'teach',
  'team',
  'test',
  'testing',
  'third',
  'though',
  'time',
  'timing',
  'today',
  'tomorrow',
  'try',
  'upload',
  'use',
  'voice',
  'wait',
  'website',
  'work',
  'write',
  'wrong'
]

export const WordsData1: Word[] = englishWords.map((word, index) => {
  return {
    id: index,
    content: {
      word: word,
      meaning: word,
      long_meaning:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      examples: [
        'quisquam est qui dolorem ipsum',
        'quisquam est qui dolorem ipsum'
      ],
      audio: `${word}.mp3`,
      groups: [Math.floor(index / 10)]
    },
    history: [],
    stats: {
      exposures: 0,
      corrects: 0, //Math.floor(Math.random() * 100),
      incorrects: 0,
      reveals: 0
    }
  }
})

export const WordsData2: Word[] = [...Array(1920)].map((_, index) => {
  return {
    id: index,
    content: {
      word: randomWords(1)[0],
      meaning: randomWords(1)[0],
      long_meaning:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      examples: [
        'quisquam est qui dolorem ipsum',
        'quisquam est qui dolorem ipsum'
      ],
      audio: null,
      groups: [Math.floor(index / 10)]
    },
    history: [],
    stats: {
      exposures: 0,
      corrects: 0, //Math.floor(Math.random() * 100),
      incorrects: 0,
      reveals: 0
    }
  }
})

export const WordsData = spanishWords.map((word, index) => {
  return {
    id: index,
    content: {
      word: word.word,
      meaning: word.meaning,
      long_meaning:
        'Neque porro quisquam est qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit',
      examples: [
        'quisquam est qui dolorem ipsum',
        'quisquam est qui dolorem ipsum'
      ],
      audio: null,
      groups: [Math.floor(index / 10)]
    },
    history: [],
    stats: {
      exposures: 0,
      corrects: 0, //Math.floor(Math.random() * 100),
      incorrects: 0,
      reveals: 0
    }
  }
})

// const WordsData1 = words.map((item, index) => {
//   return {
//     ...item,
//     groups: [Math.floor(index / 10)]
//   }
// })

// console.log(JSON.stringify(WordsData1))
