import randomWords from 'random-words'
import { wordSound } from '@Assets/audios'
import { Word } from '@Types/word'

const words = [
  { word: 'azas', meaning: 'apricot', groups: [0] },
  { word: 'rero', meaning: 'address', groups: [0] },
  { word: 'trer', meaning: 'age', groups: [0] },
  { word: 'tikuunri', meaning: 'friend', groups: [0] },
  { word: 'tielo', meaning: 'year', groups: [0] },
  { word: 'juieno', meaning: 'tree', groups: [0] },
  { word: 'tresrro', meaning: 'plane', groups: [0] },
  { word: 'juerr', meaning: 'baby', groups: [0] },
  { word: 'poopo', meaning: 'boat', groups: [0] },
  { word: 'rappze', meaning: 'father-in-law', groups: [0] },

  // { word: 'un abricot', meaning: 'apricot', groups: [0] },
  // { word: 'une adresse', meaning: 'address', groups: [0] },
  // { word: 'un âge', meaning: 'age', groups: [0] },
  // { word: 'un ami', meaning: 'friend', groups: [0] },
  // { word: 'une année', meaning: 'year', groups: [0] },
  // { word: 'un arbre', meaning: 'tree', groups: [0] },
  // { word: 'un avion', meaning: 'plane', groups: [0] },
  // { word: 'un bébé', meaning: 'baby', groups: [0] },
  // { word: 'un bateau', meaning: 'boat', groups: [0] },
  // { word: 'un beau-père', meaning: 'father-in-law', groups: [0] },
  { word: 'une bête', meaning: 'animal', groups: [1] },
  { word: 'un bijou', meaning: 'jewel', groups: [1] },
  { word: 'un blouson', meaning: 'jacket', groups: [1] },
  { word: 'un bonbon', meaning: 'candy', groups: [1] },
  { word: 'un bureau', meaning: 'desk', groups: [1] },
  { word: 'un cadeau', meaning: 'gift', groups: [1] },
  { word: 'un café', meaning: 'coffee', groups: [1] },
  { word: 'un camion', meaning: 'truck', groups: [1] },
  { word: 'un chat', meaning: 'cat', groups: [1] },
  { word: 'une chaise', meaning: 'chair', groups: [1] },
  { word: 'une chemise', meaning: 'shirt', groups: [2] },
  { word: 'un chien', meaning: 'dog', groups: [2] },
  { word: 'un chocolat', meaning: 'chocolate', groups: [2] },
  { word: 'un ciel', meaning: 'sky', groups: [2] },
  { word: 'un client', meaning: 'customer', groups: [2] },
  { word: 'un coeur', meaning: 'heart', groups: [2] },
  { word: 'un collègue', meaning: 'colleague', groups: [2] },
  { word: 'un cousin', meaning: 'cousin', groups: [2] },
  { word: 'une cravate', meaning: 'tie', groups: [2] },
  { word: 'une cuisine', meaning: 'kitchen', groups: [2] },
  { word: 'une école', meaning: 'school', groups: [3] },
  { word: 'un élève', meaning: 'student', groups: [3] },
  { word: 'un emploi', meaning: 'job', groups: [3] },
  { word: 'un enfant', meaning: 'child', groups: [3] },
  { word: 'une entreprise', meaning: 'company', groups: [3] },
  { word: 'un escalier', meaning: 'stairs', groups: [3] },
  { word: 'un esprit', meaning: 'spirit', groups: [3] },
  { word: 'une famille', meaning: 'family', groups: [3] },
  { word: 'un feu', meaning: 'fire', groups: [3] },
  { word: 'un film', meaning: 'movie', groups: [3] },
  { word: 'un frère', meaning: 'brother', groups: [4] },
  { word: 'un fruit', meaning: 'fruit', groups: [4] },
  { word: 'une gare', meaning: 'train station', groups: [4] },
  { word: 'un garçon', meaning: 'boy', groups: [4] },
  { word: 'une grand-mère', meaning: 'grandmother', groups: [4] },
  { word: 'un grand-père', meaning: 'grandfather', groups: [4] },
  { word: 'un groupe', meaning: 'group', groups: [4] },
  { word: 'un homme', meaning: 'man', groups: [4] },
  { word: 'une idée', meaning: 'idea', groups: [4] },
  { word: 'un jardin', meaning: 'garden', groups: [4] },
  { word: 'un jour', meaning: 'day', groups: [5] },
  { word: 'un jus', meaning: 'juice', groups: [5] },
  { word: 'un lit', meaning: 'bed', groups: [5] },
  { word: 'une maison', meaning: 'house', groups: [5] },
  { word: 'un marché', meaning: 'market', groups: [5] },
  { word: 'un matin', meaning: 'morning', groups: [5] },
  { word: 'un métier', meaning: 'profession', groups: [5] },
  { word: 'une mère', meaning: 'mother', groups: [5] },
  { word: 'un message', meaning: 'message', groups: [5] },
  { word: 'un mois', meaning: 'month', groups: [5] },
  { word: 'un moment', meaning: 'moment', groups: [6] },
  { word: 'un mur', meaning: 'wall', groups: [6] },
  { word: 'une musique', meaning: 'music', groups: [6] },
  { word: 'une nuit', meaning: 'night', groups: [6] },
  { word: 'un oncle', meaning: 'uncle', groups: [6] },
  { word: 'une oreille', meaning: 'ear', groups: [6] },
  { word: 'un oiseau', meaning: 'bird', groups: [6] },
  { word: 'une orange', meaning: 'orange', groups: [6] },
  { word: 'un ordinateur', meaning: 'computer', groups: [6] },
  { word: 'un pain', meaning: 'bread', groups: [6] },
  { word: 'un papa', meaning: 'dad', groups: [7] },
  { word: 'un parc', meaning: 'park', groups: [7] },
  { word: 'un parent', meaning: 'parent', groups: [7] },
  { word: 'une partenaire', meaning: 'partner', groups: [7] },
  { word: 'un pays', meaning: 'country', groups: [7] },
  { word: 'une personne', meaning: 'person', groups: [7] },
  { word: 'un petit-déjeuner', meaning: 'breakfast', groups: [7] },
  { word: 'un téléphone', meaning: 'phone', groups: [7] },
  { word: 'une photo', meaning: 'photo', groups: [7] },
  { word: 'un piano', meaning: 'piano', groups: [7] },
  { word: 'une plage', meaning: 'beach', groups: [8] },
  { word: 'une plante', meaning: 'plant', groups: [8] },
  { word: 'un plat', meaning: 'dish', groups: [8] },
  { word: 'un poisson', meaning: 'fish', groups: [8] },
  { word: 'un pote', meaning: 'buddy', groups: [8] },
  { word: 'un problème', meaning: 'problem', groups: [8] },
  { word: 'un professeur', meaning: 'teacher', groups: [8] },
  { word: 'une question', meaning: 'question', groups: [8] },
  { word: 'un quartier', meaning: 'neighborhood', groups: [8] },
  { word: 'un rayon', meaning: 'ray', groups: [8] },
  { word: 'un repas', meaning: 'meal', groups: [9] },
  { word: 'une réponse', meaning: 'answer', groups: [9] },
  { word: 'une robe', meaning: 'dress', groups: [9] },
  { word: 'une salle', meaning: 'room', groups: [9] },
  { word: 'un sapin', meaning: 'fir tree', groups: [9] },
  { word: 'un samedi', meaning: 'Saturday', groups: [9] },
  { word: 'un secret', meaning: 'secret', groups: [9] },
  { word: 'un soir', meaning: 'evening', groups: [9] },
  { word: 'un soleil', meaning: 'sun', groups: [9] },
  { word: 'un sport', meaning: 'sport', groups: [9] },
  { word: 'un train', meaning: 'train', groups: [10] },
  { word: 'une tristesse', meaning: 'sadness', groups: [10] },
  { word: 'une université', meaning: 'university', groups: [10] },
  { word: 'un vacances', meaning: 'vacation', groups: [10] },
  { word: 'un vêtement', meaning: 'clothing', groups: [10] },
  { word: 'une voiture', meaning: 'car', groups: [10] },
  { word: 'un voyage', meaning: 'trip', groups: [10] },
  { word: 'un week-end', meaning: 'weekend', groups: [10] },
  { word: 'un whisky', meaning: 'whiskey', groups: [10] },
  { word: 'un yacht', meaning: 'yacht', groups: [10] },
  { word: 'un yoga', meaning: 'yoga', groups: [11] },
  { word: 'un zéro', meaning: 'zero', groups: [11] },
  { word: 'une zone', meaning: 'zone', groups: [11] },
  { word: 'un accent', meaning: 'accent', groups: [11] },
  { word: 'une baignoire', meaning: 'bathtub', groups: [11] },
  { word: 'une bibliothèque', meaning: 'library', groups: [11] },
  { word: 'une boisson', meaning: 'beverage', groups: [11] },
  { word: 'un bonheur', meaning: 'happiness', groups: [11] },
  { word: 'un café', meaning: 'coffee', groups: [11] },
  { word: 'une campagne', meaning: 'countryside', groups: [11] },
  { word: 'un canapé', meaning: 'sofa', groups: [12] },
  { word: 'un carnet', meaning: 'notebook', groups: [12] },
  { word: 'une carte', meaning: 'map', groups: [12] },
  { word: 'une cerise', meaning: 'cherry', groups: [12] },
  { word: 'un chapeau', meaning: 'hat', groups: [12] },
  { word: 'une chaussette', meaning: 'sock', groups: [12] },
  { word: 'une cheminée', meaning: 'fireplace', groups: [12] },
  { word: 'un chocolat', meaning: 'chocolate', groups: [12] },
  { word: 'une cigarette', meaning: 'cigarette', groups: [12] },
  { word: 'un ciseau', meaning: 'scissors', groups: [12] },
  { word: 'une clé', meaning: 'key', groups: [13] },
  { word: 'un cœur', meaning: 'heart', groups: [13] },
  { word: 'une couleur', meaning: 'color', groups: [13] },
  { word: 'un crayon', meaning: 'pencil', groups: [13] },
  { word: 'un croissant', meaning: 'croissant', groups: [13] },
  { word: 'un désert', meaning: 'desert', groups: [13] },
  { word: 'un dictionnaire', meaning: 'dictionary', groups: [13] },
  { word: 'un dîner', meaning: 'dinner', groups: [13] },
  { word: 'une écharpe', meaning: 'scarf', groups: [13] },
  { word: 'un édifice', meaning: 'building', groups: [13] },
  { word: 'une église', meaning: 'church', groups: [14] },
  { word: 'un éléphant', meaning: 'elephant', groups: [14] },
  { word: 'un employé', meaning: 'employee', groups: [14] },
  { word: 'un escalier', meaning: 'staircase', groups: [14] },
  { word: 'un essuie-tout', meaning: 'paper towel', groups: [14] },
  { word: 'un étage', meaning: 'floor', groups: [14] },
  { word: 'un étudiant', meaning: 'student', groups: [14] },
  { word: 'une famille', meaning: 'family', groups: [14] },
  { word: 'un fauteuil', meaning: 'armchair', groups: [14] },
  { word: 'un feu', meaning: 'fire', groups: [14] },
  { word: 'un film', meaning: 'movie', groups: [15] },
  { word: 'un flamant rose', meaning: 'flamingo', groups: [15] },
  { word: 'un fleuve', meaning: 'river', groups: [15] },
  { word: 'un fouet', meaning: 'whip', groups: [15] },
  { word: 'une foule', meaning: 'crowd', groups: [15] },
  { word: 'une fourchette', meaning: 'fork', groups: [15] },
  { word: 'un fromage', meaning: 'cheese', groups: [15] },
  { word: 'un fruit', meaning: 'fruit', groups: [15] },
  { word: 'un garage', meaning: 'garage', groups: [15] },
  { word: 'un gâteau', meaning: 'cake', groups: [15] },
  { word: 'un génie', meaning: 'genie', groups: [16] },
  { word: 'un geste', meaning: 'gesture', groups: [16] },
  { word: 'un glacier', meaning: 'glacier', groups: [16] },
  { word: 'une glace', meaning: 'ice cream', groups: [16] },
  { word: 'un globe', meaning: 'globe', groups: [16] },
  { word: 'un gouvernement', meaning: 'government', groups: [16] },
  { word: 'un gratte-ciel', meaning: 'skyscraper', groups: [16] },
  { word: 'une guitare', meaning: 'guitar', groups: [16] },
  { word: 'un hamburger', meaning: 'hamburger', groups: [16] },
  { word: 'un haricot', meaning: 'bean', groups: [16] },
  { word: 'un hélicoptère', meaning: 'helicopter', groups: [17] },
  { word: 'un hibou', meaning: 'owl', groups: [17] },
  { word: 'une histoire', meaning: 'story', groups: [17] },
  { word: 'une horloge', meaning: 'clock', groups: [17] },
  { word: 'un hôtel', meaning: 'hotel', groups: [17] },
  { word: 'un humain', meaning: 'human', groups: [17] },
  { word: 'un iceberg', meaning: 'iceberg', groups: [17] },
  { word: 'une image', meaning: 'image', groups: [17] },
  { word: 'un immeuble', meaning: 'apartment building', groups: [17] },
  { word: 'un insecte', meaning: 'insect', groups: [17] },
  { word: 'un instrument', meaning: 'instrument', groups: [18] },
  { word: 'un jambon', meaning: 'ham', groups: [18] },
  { word: 'un jardin', meaning: 'garden', groups: [18] },
  { word: 'un jeu', meaning: 'game', groups: [18] },
  { word: 'une joie', meaning: 'joy', groups: [18] },
  { word: 'un jour', meaning: 'day', groups: [18] },
  { word: 'un journal', meaning: 'newspaper', groups: [18] },
  { word: 'un kangourou', meaning: 'kangaroo', groups: [18] },
  { word: 'un karatéka', meaning: 'karateka', groups: [18] },
  { word: 'un kayak', meaning: 'kayak', groups: [18] },
  { word: 'un kébab', meaning: 'kebab', groups: [19] },
  { word: 'un kiwi', meaning: 'kiwi', groups: [19] },
  { word: 'un koala', meaning: 'koala', groups: [19] },
  { word: 'un lac', meaning: 'lake', groups: [19] },
  { word: 'un lampadaire', meaning: 'street lamp', groups: [19] },
  { word: 'une lampe', meaning: 'lamp', groups: [19] },
  { word: 'un lapin', meaning: 'rabbit', groups: [19] },
  { word: 'une lettre', meaning: 'letter', groups: [19] },
  { word: 'un livre', meaning: 'book', groups: [19] },
  { word: 'un loup', meaning: 'wolf', groups: [19] },
  { word: 'un marché', meaning: 'market', groups: [20] },
  { word: 'un marin', meaning: 'sailor', groups: [20] },
  { word: 'une marmotte', meaning: 'marmot', groups: [20] },
  { word: 'un matelas', meaning: 'mattress', groups: [20] },
  { word: 'un médecin', meaning: 'doctor', groups: [20] },
  { word: 'un miroir', meaning: 'mirror', groups: [20] },
  { word: 'une montagne', meaning: 'mountain', groups: [20] },
  { word: 'un monument', meaning: 'monument', groups: [20] },
  { word: 'un mouchoir', meaning: 'handkerchief', groups: [20] },
  { word: 'un moulin', meaning: 'mill', groups: [20] },
  { word: 'un mouton', meaning: 'sheep', groups: [21] },
  { word: 'un mur', meaning: 'wall', groups: [21] },
  { word: 'un musée', meaning: 'museum', groups: [21] },
  { word: 'une musique', meaning: 'music', groups: [21] },
  { word: 'un navire', meaning: 'ship', groups: [21] },
  { word: 'une neige', meaning: 'snow', groups: [21] },
  { word: 'un nez', meaning: 'nose', groups: [21] },
  { word: 'une nuit', meaning: 'night', groups: [21] },
  { word: 'un nuage', meaning: 'cloud', groups: [21] },
  { word: 'un numéro', meaning: 'number', groups: [21] },
  { word: 'un océan', meaning: 'ocean', groups: [22] },
  { word: 'un oiseau', meaning: 'bird', groups: [22] },
  { word: 'un ongle', meaning: 'nail', groups: [22] },
  { word: 'un orage', meaning: 'thunderstorm', groups: [22] },
  { word: 'une orange', meaning: 'orange', groups: [22] },
  { word: 'une oreille', meaning: 'ear', groups: [22] },
  { word: 'un ours', meaning: 'bear', groups: [22] },
  { word: 'un outil', meaning: 'tool', groups: [22] },
  { word: 'un ovni', meaning: 'UFO', groups: [22] },
  { word: 'un oxford', meaning: 'oxford', groups: [22] },
  { word: 'un pain', meaning: 'bread', groups: [23] },
  { word: 'une paire', meaning: 'pair', groups: [23] },
  { word: 'un palmier', meaning: 'palm tree', groups: [23] },
  { word: 'un panda', meaning: 'panda', groups: [23] },
  { word: 'un pantalon', meaning: 'pants', groups: [23] },
  { word: 'un papillon', meaning: 'butterfly', groups: [23] },
  { word: 'une parapluie', meaning: 'umbrella', groups: [23] },
  { word: 'un parc', meaning: 'park', groups: [23] },
  { word: 'un parking', meaning: 'parking lot', groups: [23] },
  { word: 'un partenaire', meaning: 'partner', groups: [23] },
  { word: 'un passage', meaning: 'passage', groups: [24] },
  { word: 'un pastèque', meaning: 'watermelon', groups: [24] },
  { word: 'un patron', meaning: 'boss', groups: [24] },
  { word: 'un pendentif', meaning: 'pendant', groups: [24] },
  { word: 'une pêche', meaning: 'peach', groups: [24] },
  { word: 'un peintre', meaning: 'painter', groups: [24] },
  { word: 'un peuple', meaning: 'people', groups: [24] },
  { word: 'une pharmacie', meaning: 'pharmacy', groups: [24] },
  { word: 'un photographe', meaning: 'photographer', groups: [24] },
  { word: 'un piano', meaning: 'piano', groups: [24] },
  { word: 'un pique-nique', meaning: 'picnic', groups: [25] },
  { word: 'un pistolet', meaning: 'gun', groups: [25] },
  { word: 'un plat', meaning: 'dish', groups: [25] },
  { word: 'un plateau', meaning: 'tray', groups: [25] },
  { word: 'un poisson', meaning: 'fish', groups: [25] },
  { word: 'un policier', meaning: 'police officer', groups: [25] },
  { word: 'un pont', meaning: 'bridge', groups: [25] }
]

// const WordsData1 = words.map((item, index) => {
//   return {
//     id: index,
//     content: item,
//     history: [],
//     stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
//   }
// })

// WordsData1[0] = WordsData1[1]

const words2 = [
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
  'file.txt',
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

export const WordsData: Word[] = words2.map((word, index) => {
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
      audio: wordSound,
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

export const WordsData1 = words.map((word, index) => {
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
      audio: wordSound,
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
