const r = [
  'Fang',
  'Splash',
  'Blazeonite',
  'Jolt',
  'Sunhare',
  'Stream',
  'Frost',
  'Shimmeron',
  'Flamefox',
  'Rockcrab',
  'Glim',
  'Skyleaf',
  'Boltia',
  'Bolt',
  'Flametail',
  'Haze',
  'Puffox',
  'Blazebeak',
  'Snarl',
  'Shimmer',
  'Sparkatoo',
  'Moss',
  'Sparkle',
  'Claw',
  'Volcaraptor',
  'Bolturtle',
  'Pyre',
  'Bolt',
  'Sproutail',
  'Glowfinch',
  'Frosquid',
  'Aqua',
  'Flaria',
  'Shell',
  'Blaze',
  'Flare',
  'Crunch',
  'Squall',
  'Aquapod',
  'Glim',
  'Flame',
  'Fluffurnace',
  'Leafpaw',
  'Blazeonix',
  'Blazeon',
  'Seedwing',
  'Vine',
  'Frostbat',
  'Frostfox',
  'Fizzen',
  'Thorn',
  'Scorchick',
  'Flick',
  'Glacicle',
  'Sun',
  'Boltion',
  'Leaf',
  'Quake',
  'Glide',
  'Sparkshell',
  'Frostia',
  'Sparkbat',
  'Glimmernose',
  'Fuzzbug',
  'Aqua',
  'Blazeia',
  'Breeze',
  'Tropigrass',
  'Frostbite',
  'Mosschomp',
  'Pyre',
  'Glintlizard',
  'Surge',
  'Frost',
  'Claw',
  'Tusk',
  'Sunfinch',
  'Thundrill',
  'Thornbuzz',
  'Gust',
  'Blaze',
  'Twirl',
  'Jolt',
  'Gloom',
  'Spray',
  'Grimbolt',
  'Scorchimp',
  'Breezor',
  'Spark',
  'Quiver',
  'Reef',
  'Vine',
  'Snowhare',
  'Twinkleaf',
  'Fang',
  'Spark',
  'Coralite',
  'Sparkant',
  'Flicker',
  'Thunderfly'
]

console.log(r.length)

const e = [
  'Door',
  'Dance',
  'Jump',
  'Spoon',
  'Cloud',
  'Read',
  'Picture',
  'Pen',
  'Chair',
  'Dark',
  'Small',
  'Meat',
  'Fork',
  'Listen',
  'Fire',
  'Vehicle',
  'Quiet',
  'Knife',
  'Clock',
  'Paper',
  'Sky',
  'Star',
  'Laugh',
  'Lamp',
  'Sing',
  'Funny',
  'Toy',
  'Blanket',
  'Paint',
  'Bright',
  'Sun',
  'Road',
  'Insect',
  'River',
  'Drink',
  'Loud',
  'Sand',
  'Key',
  'Person',
  'Water',
  'Air',
  'Write',
  'Pillow',
  'Ugly',
  'Building',
  'Watch',
  'Television',
  'Clean',
  'Beautiful',
  'Phone',
  'Mirror',
  'Walk',
  'Window',
  'Brave',
  'Fruit',
  'Cup',
  'Flower',
  'Plate',
  'Plant',
  'Fish',
  'Sad',
  'Vegetable',
  'Table',
  'Slow',
  'Play',
  'Pencil',
  'Eat',
  'Book',
  'Draw',
  'Fast',
  'Serious',
  'Weak',
  'Fridge',
  'Rock',
  'Smart',
  'Sleep',
  'Glass',
  'Stupid',
  'Big',
  'Car',
  'Animal',
  'Earth',
  'Strong',
  'Grass',
  'Talk',
  'Towel',
  'Moon',
  'Computer',
  'Ocean',
  'Couch',
  'Run',
  'Mountain',
  'Cook',
  'Happy',
  'Cry',
  'Oven',
  'Tree',
  'Bird',
  'Cowardly',
  'Plant'
]

// const w = r.map((item, i) => ({
//   id: i,
//   content: { word: item, meaning: e[i] },
//   history: [],
//   stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
// }))

// console.log(JSON.stringify(w))

const WORDS = [
  {
    id: 1,
    content: { word: 'život', meaning: 'life' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 2,
    content: { word: 'zdravlje', meaning: 'health' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 3,
    content: { word: 'obitelj', meaning: 'family' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 4,
    content: { word: 'ljubav', meaning: 'love' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 5,
    content: { word: 'hrana', meaning: 'food' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 6,
    content: { word: 'voda', meaning: 'water' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 7,
    content: { word: 'more', meaning: 'sea' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 8,
    content: { word: 'riječ', meaning: 'word' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 9,
    content: { word: 'grad', meaning: 'city' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 10,
    content: { word: 'drvo', meaning: 'tree' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 11,
    content: { word: 'planina', meaning: 'mountain' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 12,
    content: { word: 'rijeka', meaning: 'river' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 13,
    content: { word: 'poljoprivreda', meaning: 'agriculture' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 14,
    content: { word: 'stoka', meaning: 'livestock' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 15,
    content: { word: 'automobil', meaning: 'car' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 16,
    content: { word: 'avion', meaning: 'plane' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 17,
    content: { word: 'bicikl', meaning: 'bicycle' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 18,
    content: { word: 'brod', meaning: 'boat' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 19,
    content: { word: 'željeznica', meaning: 'railway' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 20,
    content: { word: 'vlak', meaning: 'train' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 21,
    content: { word: 'trgovina', meaning: 'store' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 22,
    content: { word: 'restoran', meaning: 'restaurant' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 23,
    content: { word: 'hotel', meaning: 'hotel' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 24,
    content: { word: 'banka', meaning: 'bank' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 25,
    content: { word: 'ljekarna', meaning: 'pharmacy' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 26,
    content: { word: 'škola', meaning: 'school' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 27,
    content: { word: 'fakultet', meaning: 'university' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 28,
    content: { word: 'bolnica', meaning: 'hospital' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 29,
    content: { word: 'trgovački centar', meaning: 'mall' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 30,
    content: { word: 'muzej', meaning: 'museum' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 31,
    content: { word: 'knjižnica', meaning: 'library' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 32,
    content: { word: 'kino', meaning: 'cinema' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 33,
    content: { word: 'koncert', meaning: 'concert' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 34,
    content: { word: 'pjesma', meaning: 'song' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 35,
    content: { word: 'umjetnost', meaning: 'art' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 36,
    content: { word: 'sport', meaning: 'sport' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 37,
    content: { word: 'odmor', meaning: 'vacation' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 38,
    content: { word: 'putovanje', meaning: 'travel' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 39,
    content: { word: 'posao', meaning: 'job' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 41,
    content: { word: 'novac', meaning: 'money' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 42,
    content: { word: 'kreditna kartica', meaning: 'credit card' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 43,
    content: { word: 'novčanik', meaning: 'wallet' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 44,
    content: { word: 'račun', meaning: 'bill' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 45,
    content: { word: 'porez', meaning: 'tax' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 46,
    content: { word: 'računalni program', meaning: 'computer program' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 47,
    content: { word: 'internetska stranica', meaning: 'website' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 48,
    content: { word: 'telefon', meaning: 'phone' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 49,
    content: { word: 'računalo', meaning: 'computer' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 50,
    content: { word: 'elektricitet', meaning: 'electricity' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  }
]
