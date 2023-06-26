import images from './images';

const wines = [
  {
    title: 'Guinness',
    price: '2$',
    tags: 'AU | Bottle',
  },
  {
    title: 'Stella Artois',
    price: '2$',
    tags: 'AU | Bottle',
  },
  {
    title: 'Chateau lafite Rothschild',
    price: '8$',
    tags: 'FR | 750 ml',
  },
  {
    title: 'Saterns',
    price: '8$',
    tags: 'CA | 750 ml',
  },
];

const cocktails = [
  {
    title: 'Margarita',
    price: '8$',
    tags: 'Aperol | Villa Marchesi prosecco | soda | 30 ml',
  },
  {
    title: "Old Fashioned",
    price: '8$',
    tags: 'Dark rum | Ginger beer | Slice of lime',
  },
  {
    title: 'Cosmopolitan',
    price: '10$',
    tags: 'Rum | Citrus juice | Sugar',
  },
  {
    title: 'Manhattan',
    price: '10$',
    tags: 'Bourbon | Brown sugar | Angostura Bitters',
  },
];

const awards = [
  {
    imgUrl: images.award01,
    title: 'Michelin Star',
    subtitle: 'Culinary excellence, impeccable service, memorable experience.',
  },
  {
    imgUrl: images.award02,
    title: 'Zagat Survey',
    subtitle: 'Reliable recommendations, amazin food, food decor, service.',
  },
  {
    imgUrl: images.award03,
    title: "Time Out Food Awards",
    subtitle: "City's best, culinary excellence, memorable experience.",
  },
  {
    imgUrl: images.award04,
    title: 'Outstanding Chef',
    subtitle: 'Lorem ipsum dolor sit amet, consectetur.',
  },
];

export default { wines, cocktails, awards };
