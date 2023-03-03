const WORDS = [
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

const wrds = [
  { word: 'un abricot', meaning: 'apricot' },
  { word: 'une adresse', meaning: 'address' },
  { word: 'un âge', meaning: 'age' },
  { word: 'un ami', meaning: 'friend' },
  { word: 'une année', meaning: 'year' },
  { word: 'un arbre', meaning: 'tree' },
  { word: 'un avion', meaning: 'plane' },
  { word: 'un bébé', meaning: 'baby' },
  { word: 'un bateau', meaning: 'boat' },
  { word: 'un beau-père', meaning: 'father-in-law' },
  { word: 'une bête', meaning: 'animal' },
  { word: 'un bijou', meaning: 'jewel' },
  { word: 'un blouson', meaning: 'jacket' },
  { word: 'un bonbon', meaning: 'candy' },
  { word: 'un bureau', meaning: 'desk' },
  { word: 'un cadeau', meaning: 'gift' },
  { word: 'un café', meaning: 'coffee' },
  { word: 'un camion', meaning: 'truck' },
  { word: 'un chat', meaning: 'cat' },
  { word: 'une chaise', meaning: 'chair' },
  { word: 'une chemise', meaning: 'shirt' },
  { word: 'un chien', meaning: 'dog' },
  { word: 'un chocolat', meaning: 'chocolate' },
  { word: 'un ciel', meaning: 'sky' },
  { word: 'un client', meaning: 'customer' },
  { word: 'un coeur', meaning: 'heart' },
  { word: 'un collègue', meaning: 'colleague' },
  { word: 'un cousin', meaning: 'cousin' },
  { word: 'une cravate', meaning: 'tie' },
  { word: 'une cuisine', meaning: 'kitchen' },
  { word: 'une école', meaning: 'school' },
  { word: 'un élève', meaning: 'student' },
  { word: 'un emploi', meaning: 'job' },
  { word: 'un enfant', meaning: 'child' },
  { word: 'une entreprise', meaning: 'company' },
  { word: 'un escalier', meaning: 'stairs' },
  { word: 'un esprit', meaning: 'spirit' },
  { word: 'une famille', meaning: 'family' },
  { word: 'un feu', meaning: 'fire' },
  { word: 'un film', meaning: 'movie' },
  { word: 'un frère', meaning: 'brother' },
  { word: 'un fruit', meaning: 'fruit' },
  { word: 'une gare', meaning: 'train station' },
  { word: 'un garçon', meaning: 'boy' },
  { word: 'une grand-mère', meaning: 'grandmother' },
  { word: 'un grand-père', meaning: 'grandfather' },
  { word: 'un groupe', meaning: 'group' },
  { word: 'un homme', meaning: 'man' },
  { word: 'une idée', meaning: 'idea' },
  { word: 'un jardin', meaning: 'garden' },
  { word: 'un jour', meaning: 'day' },
  { word: 'un jus', meaning: 'juice' },
  { word: 'un lit', meaning: 'bed' },
  { word: 'une maison', meaning: 'house' },
  { word: 'un marché', meaning: 'market' },
  { word: 'un matin', meaning: 'morning' },
  { word: 'un métier', meaning: 'profession' },
  { word: 'une mère', meaning: 'mother' },
  { word: 'un message', meaning: 'message' },
  { word: 'un mois', meaning: 'month' },
  { word: 'un moment', meaning: 'moment' },
  { word: 'un mur', meaning: 'wall' },
  { word: 'une musique', meaning: 'music' },
  { word: 'une nuit', meaning: 'night' },
  { word: 'un oncle', meaning: 'uncle' },
  { word: 'une oreille', meaning: 'ear' },
  { word: 'un oiseau', meaning: 'bird' },
  { word: 'une orange', meaning: 'orange' },
  { word: 'un ordinateur', meaning: 'computer' },
  { word: 'un pain', meaning: 'bread' },
  { word: 'un papa', meaning: 'dad' },
  { word: 'un parc', meaning: 'park' },
  { word: 'un parent', meaning: 'parent' },
  { word: 'une partenaire', meaning: 'partner' },
  { word: 'un pays', meaning: 'country' },
  { word: 'une personne', meaning: 'person' },
  { word: 'un petit-déjeuner', meaning: 'breakfast' },
  { word: 'un téléphone', meaning: 'phone' },
  { word: 'une photo', meaning: 'photo' },
  { word: 'un piano', meaning: 'piano' },
  { word: 'une plage', meaning: 'beach' },
  { word: 'une plante', meaning: 'plant' },
  { word: 'un plat', meaning: 'dish' },
  { word: 'un poisson', meaning: 'fish' },
  { word: 'un pote', meaning: 'buddy' },
  { word: 'un problème', meaning: 'problem' },
  { word: 'un professeur', meaning: 'teacher' },
  { word: 'une question', meaning: 'question' },
  { word: 'un quartier', meaning: 'neighborhood' },
  { word: 'un rayon', meaning: 'ray' },
  { word: 'un repas', meaning: 'meal' },
  { word: 'une réponse', meaning: 'answer' },
  { word: 'une robe', meaning: 'dress' },
  { word: 'une salle', meaning: 'room' },
  { word: 'un sapin', meaning: 'fir tree' },
  { word: 'un samedi', meaning: 'Saturday' },
  { word: 'un secret', meaning: 'secret' },
  { word: 'un soir', meaning: 'evening' },
  { word: 'un soleil', meaning: 'sun' },
  { word: 'un sport', meaning: 'sport' },
  { word: 'un train', meaning: 'train' },
  { word: 'une tristesse', meaning: 'sadness' },
  { word: 'une université', meaning: 'university' },
  { word: 'un vacances', meaning: 'vacation' },
  { word: 'un vêtement', meaning: 'clothing' },
  { word: 'une voiture', meaning: 'car' },
  { word: 'un voyage', meaning: 'trip' },
  { word: 'un week-end', meaning: 'weekend' },
  { word: 'un whisky', meaning: 'whiskey' },
  { word: 'un yacht', meaning: 'yacht' },
  { word: 'un yoga', meaning: 'yoga' },
  { word: 'un zéro', meaning: 'zero' },
  { word: 'une zone', meaning: 'zone' },
  { word: 'un accent', meaning: 'accent' },
  { word: 'une baignoire', meaning: 'bathtub' },
  { word: 'une bibliothèque', meaning: 'library' },
  { word: 'une boisson', meaning: 'beverage' },
  { word: 'un bonheur', meaning: 'happiness' },
  { word: 'un café', meaning: 'coffee' },
  { word: 'une campagne', meaning: 'countryside' },
  { word: 'un canapé', meaning: 'sofa' },
  { word: 'un carnet', meaning: 'notebook' },
  { word: 'une carte', meaning: 'map' },
  { word: 'une cerise', meaning: 'cherry' },
  { word: 'un chapeau', meaning: 'hat' },
  { word: 'une chaussette', meaning: 'sock' },
  { word: 'une cheminée', meaning: 'fireplace' },
  { word: 'un chocolat', meaning: 'chocolate' },
  { word: 'une cigarette', meaning: 'cigarette' },
  { word: 'un ciseau', meaning: 'scissors' },
  { word: 'une clé', meaning: 'key' },
  { word: 'un cœur', meaning: 'heart' },
  { word: 'une couleur', meaning: 'color' },
  { word: 'un crayon', meaning: 'pencil' },
  { word: 'un croissant', meaning: 'croissant' },
  { word: 'un désert', meaning: 'desert' },
  { word: 'un dictionnaire', meaning: 'dictionary' },
  { word: 'un dîner', meaning: 'dinner' },
  { word: 'une écharpe', meaning: 'scarf' },
  { word: 'un édifice', meaning: 'building' },
  { word: 'une église', meaning: 'church' },
  { word: 'un éléphant', meaning: 'elephant' },
  { word: 'un employé', meaning: 'employee' },
  { word: 'un escalier', meaning: 'staircase' },
  { word: 'un essuie-tout', meaning: 'paper towel' },
  { word: 'un étage', meaning: 'floor' },
  { word: 'un étudiant', meaning: 'student' },
  { word: 'une famille', meaning: 'family' },
  { word: 'un fauteuil', meaning: 'armchair' },
  { word: 'un feu', meaning: 'fire' },
  { word: 'un film', meaning: 'movie' },
  { word: 'un flamant rose', meaning: 'flamingo' },
  { word: 'un fleuve', meaning: 'river' },
  { word: 'un fouet', meaning: 'whip' },
  { word: 'une foule', meaning: 'crowd' },
  { word: 'une fourchette', meaning: 'fork' },
  { word: 'un fromage', meaning: 'cheese' },
  { word: 'un fruit', meaning: 'fruit' },
  { word: 'un garage', meaning: 'garage' },
  { word: 'un gâteau', meaning: 'cake' },
  { word: 'un génie', meaning: 'genie' },
  { word: 'un geste', meaning: 'gesture' },
  { word: 'un glacier', meaning: 'glacier' },
  { word: 'une glace', meaning: 'ice cream' },
  { word: 'un globe', meaning: 'globe' },
  { word: 'un gouvernement', meaning: 'government' },
  { word: 'un gratte-ciel', meaning: 'skyscraper' },
  { word: 'une guitare', meaning: 'guitar' },
  { word: 'un hamburger', meaning: 'hamburger' },
  { word: 'un haricot', meaning: 'bean' },
  { word: 'un hélicoptère', meaning: 'helicopter' },
  { word: 'un hibou', meaning: 'owl' },
  { word: 'une histoire', meaning: 'story' },
  { word: 'une horloge', meaning: 'clock' },
  { word: 'un hôtel', meaning: 'hotel' },
  { word: 'un humain', meaning: 'human' },
  { word: 'un iceberg', meaning: 'iceberg' },
  { word: 'une image', meaning: 'image' },
  { word: 'un immeuble', meaning: 'apartment building' },
  { word: 'un insecte', meaning: 'insect' },
  { word: 'un instrument', meaning: 'instrument' },
  { word: 'un jambon', meaning: 'ham' },
  { word: 'un jardin', meaning: 'garden' },
  { word: 'un jeu', meaning: 'game' },
  { word: 'une joie', meaning: 'joy' },
  { word: 'un jour', meaning: 'day' },
  { word: 'un journal', meaning: 'newspaper' },
  { word: 'un kangourou', meaning: 'kangaroo' },
  { word: 'un karatéka', meaning: 'karateka' },
  { word: 'un kayak', meaning: 'kayak' },
  { word: 'un kébab', meaning: 'kebab' },
  { word: 'un kiwi', meaning: 'kiwi' },
  { word: 'un koala', meaning: 'koala' },
  { word: 'un lac', meaning: 'lake' },
  { word: 'un lampadaire', meaning: 'street lamp' },
  { word: 'une lampe', meaning: 'lamp' },
  { word: 'un lapin', meaning: 'rabbit' },
  { word: 'une lettre', meaning: 'letter' },
  { word: 'un livre', meaning: 'book' },
  { word: 'un loup', meaning: 'wolf' },
  { word: 'un marché', meaning: 'market' },
  { word: 'un marin', meaning: 'sailor' },
  { word: 'une marmotte', meaning: 'marmot' },
  { word: 'un matelas', meaning: 'mattress' },
  { word: 'un médecin', meaning: 'doctor' },
  { word: 'un miroir', meaning: 'mirror' },
  { word: 'une montagne', meaning: 'mountain' },
  { word: 'un monument', meaning: 'monument' },
  { word: 'un mouchoir', meaning: 'handkerchief' },
  { word: 'un moulin', meaning: 'mill' },
  { word: 'un mouton', meaning: 'sheep' },
  { word: 'un mur', meaning: 'wall' },
  { word: 'un musée', meaning: 'museum' },
  { word: 'une musique', meaning: 'music' },
  { word: 'un navire', meaning: 'ship' },
  { word: 'une neige', meaning: 'snow' },
  { word: 'un nez', meaning: 'nose' },
  { word: 'une nuit', meaning: 'night' },
  { word: 'un nuage', meaning: 'cloud' },
  { word: 'un numéro', meaning: 'number' },
  { word: 'un océan', meaning: 'ocean' },
  { word: 'un oiseau', meaning: 'bird' },
  { word: 'un ongle', meaning: 'nail' },
  { word: 'un orage', meaning: 'thunderstorm' },
  { word: 'une orange', meaning: 'orange' },
  { word: 'une oreille', meaning: 'ear' },
  { word: 'un ours', meaning: 'bear' },
  { word: 'un outil', meaning: 'tool' },
  { word: 'un ovni', meaning: 'UFO' },
  { word: 'un oxford', meaning: 'oxford' },
  { word: 'un pain', meaning: 'bread' },
  { word: 'une paire', meaning: 'pair' },
  { word: 'un palmier', meaning: 'palm tree' },
  { word: 'un panda', meaning: 'panda' },
  { word: 'un pantalon', meaning: 'pants' },
  { word: 'un papillon', meaning: 'butterfly' },
  { word: 'une parapluie', meaning: 'umbrella' },
  { word: 'un parc', meaning: 'park' },
  { word: 'un parking', meaning: 'parking lot' },
  { word: 'un partenaire', meaning: 'partner' },
  { word: 'un passage', meaning: 'passage' },
  { word: 'un pastèque', meaning: 'watermelon' },
  { word: 'un patron', meaning: 'boss' },
  { word: 'un pendentif', meaning: 'pendant' },
  { word: 'une pêche', meaning: 'peach' },
  { word: 'un peintre', meaning: 'painter' },
  { word: 'un peuple', meaning: 'people' },
  { word: 'une pharmacie', meaning: 'pharmacy' },
  { word: 'un photographe', meaning: 'photographer' },
  { word: 'un piano', meaning: 'piano' },
  { word: 'un pique-nique', meaning: 'picnic' },
  { word: 'un pistolet', meaning: 'gun' },
  { word: 'un plat', meaning: 'dish' },
  { word: 'un plateau', meaning: 'tray' },
  { word: 'un poisson', meaning: 'fish' },
  { word: 'un policier', meaning: 'police officer' },
  { word: 'un pont', meaning: 'bridge' }
]

const WordsData = wrds.map((item, index) => {
  return {
    id: index,
    content: item,
    history: [],
    stats: { exposures: 0, corrects: 0, incorrects: 0, reveals: 0 }
  }
})

export { WordsData }
