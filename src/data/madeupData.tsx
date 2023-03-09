const madeUpWords = [
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

console.log(madeUpWords.length)

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

const WORDS1 = [
  {
    id: 0,
    content: { word: 'Fang', meaning: 'Door' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 1,
    content: { word: 'Splash', meaning: 'Dance' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 2,
    content: { word: 'Blazeonite', meaning: 'Jump' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 3,
    content: { word: 'Jolt', meaning: 'Spoon' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 4,
    content: { word: 'Sunhare', meaning: 'Cloud' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 5,
    content: { word: 'Stream', meaning: 'Read' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 6,
    content: { word: 'Frost', meaning: 'Picture' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 7,
    content: { word: 'Shimmeron', meaning: 'Pen' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 8,
    content: { word: 'Flamefox', meaning: 'Chair' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 9,
    content: { word: 'Rockcrab', meaning: 'Dark' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 10,
    content: { word: 'Glim', meaning: 'Small' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 11,
    content: { word: 'Skyleaf', meaning: 'Meat' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 12,
    content: { word: 'Boltia', meaning: 'Fork' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 13,
    content: { word: 'Bolt', meaning: 'Listen' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 14,
    content: { word: 'Flametail', meaning: 'Fire' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 15,
    content: { word: 'Haze', meaning: 'Vehicle' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 16,
    content: { word: 'Puffox', meaning: 'Quiet' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 17,
    content: { word: 'Blazebeak', meaning: 'Knife' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 18,
    content: { word: 'Snarl', meaning: 'Clock' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 19,
    content: { word: 'Shimmer', meaning: 'Paper' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 20,
    content: { word: 'Sparkatoo', meaning: 'Sky' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 21,
    content: { word: 'Moss', meaning: 'Star' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 22,
    content: { word: 'Sparkle', meaning: 'Laugh' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 23,
    content: { word: 'Claw', meaning: 'Lamp' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 24,
    content: { word: 'Volcaraptor', meaning: 'Sing' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 25,
    content: { word: 'Bolturtle', meaning: 'Funny' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 26,
    content: { word: 'Pyre', meaning: 'Toy' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 27,
    content: { word: 'Bolt', meaning: 'Blanket' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 28,
    content: { word: 'Sproutail', meaning: 'Paint' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 29,
    content: { word: 'Glowfinch', meaning: 'Bright' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 30,
    content: { word: 'Frosquid', meaning: 'Sun' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 31,
    content: { word: 'Aqua', meaning: 'Road' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 32,
    content: { word: 'Flaria', meaning: 'Insect' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 33,
    content: { word: 'Shell', meaning: 'River' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 34,
    content: { word: 'Blaze', meaning: 'Drink' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 35,
    content: { word: 'Flare', meaning: 'Loud' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 36,
    content: { word: 'Crunch', meaning: 'Sand' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 37,
    content: { word: 'Squall', meaning: 'Key' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 38,
    content: { word: 'Aquapod', meaning: 'Person' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 39,
    content: { word: 'Glim', meaning: 'Water' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 40,
    content: { word: 'Flame', meaning: 'Air' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 41,
    content: { word: 'Fluffurnace', meaning: 'Write' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 42,
    content: { word: 'Leafpaw', meaning: 'Pillow' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 43,
    content: { word: 'Blazeonix', meaning: 'Ugly' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 44,
    content: { word: 'Blazeon', meaning: 'Building' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 45,
    content: { word: 'Seedwing', meaning: 'Watch' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 46,
    content: { word: 'Vine', meaning: 'Television' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 47,
    content: { word: 'Frostbat', meaning: 'Clean' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 48,
    content: { word: 'Frostfox', meaning: 'Beautiful' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 49,
    content: { word: 'Fizzen', meaning: 'Phone' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 50,
    content: { word: 'Thorn', meaning: 'Mirror' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 51,
    content: { word: 'Scorchick', meaning: 'Walk' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 52,
    content: { word: 'Flick', meaning: 'Window' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 53,
    content: { word: 'Glacicle', meaning: 'Brave' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 54,
    content: { word: 'Sun', meaning: 'Fruit' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 55,
    content: { word: 'Boltion', meaning: 'Cup' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 56,
    content: { word: 'Leaf', meaning: 'Flower' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 57,
    content: { word: 'Quake', meaning: 'Plate' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 58,
    content: { word: 'Glide', meaning: 'Plant' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 59,
    content: { word: 'Sparkshell', meaning: 'Fish' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 60,
    content: { word: 'Frostia', meaning: 'Sad' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 61,
    content: { word: 'Sparkbat', meaning: 'Vegetable' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 62,
    content: { word: 'Glimmernose', meaning: 'Table' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 63,
    content: { word: 'Fuzzbug', meaning: 'Slow' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 64,
    content: { word: 'Aqua', meaning: 'Play' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 65,
    content: { word: 'Blazeia', meaning: 'Pencil' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 66,
    content: { word: 'Breeze', meaning: 'Eat' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 67,
    content: { word: 'Tropigrass', meaning: 'Book' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 68,
    content: { word: 'Frostbite', meaning: 'Draw' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 69,
    content: { word: 'Mosschomp', meaning: 'Fast' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 70,
    content: { word: 'Pyre', meaning: 'Serious' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 71,
    content: { word: 'Glintlizard', meaning: 'Weak' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 72,
    content: { word: 'Surge', meaning: 'Fridge' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 73,
    content: { word: 'Frost', meaning: 'Rock' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 74,
    content: { word: 'Claw', meaning: 'Smart' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 75,
    content: { word: 'Tusk', meaning: 'Sleep' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 76,
    content: { word: 'Sunfinch', meaning: 'Glass' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 77,
    content: { word: 'Thundrill', meaning: 'Stupid' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 78,
    content: { word: 'Thornbuzz', meaning: 'Big' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 79,
    content: { word: 'Gust', meaning: 'Car' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 80,
    content: { word: 'Blaze', meaning: 'Animal' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 81,
    content: { word: 'Twirl', meaning: 'Earth' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 82,
    content: { word: 'Jolt', meaning: 'Strong' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 83,
    content: { word: 'Gloom', meaning: 'Grass' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 84,
    content: { word: 'Spray', meaning: 'Talk' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 85,
    content: { word: 'Grimbolt', meaning: 'Towel' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 86,
    content: { word: 'Scorchimp', meaning: 'Moon' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 87,
    content: { word: 'Breezor', meaning: 'Computer' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 88,
    content: { word: 'Spark', meaning: 'Ocean' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 89,
    content: { word: 'Quiver', meaning: 'Couch' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 90,
    content: { word: 'Reef', meaning: 'Run' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 91,
    content: { word: 'Vine', meaning: 'Mountain' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 92,
    content: { word: 'Snowhare', meaning: 'Cook' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 93,
    content: { word: 'Twinkleaf', meaning: 'Happy' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 94,
    content: { word: 'Fang', meaning: 'Cry' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 95,
    content: { word: 'Spark', meaning: 'Oven' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 96,
    content: { word: 'Coralite', meaning: 'Tree' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 97,
    content: { word: 'Sparkant', meaning: 'Bird' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 98,
    content: { word: 'Flicker', meaning: 'Cowardly' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  },
  {
    id: 99,
    content: { word: 'Thunderfly', meaning: 'Plant' },
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  }
]

export { madeUpWords }
