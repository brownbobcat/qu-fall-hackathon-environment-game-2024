// constants.ts
import { WasteItem } from './types';

export const availableItems: WasteItem[] = [
  // Recyclable Items (10 items)
  { id: 1, name: 'Plastic Bottle', type: 'recyclable', image: 'assets/images/plastic-bottle.png', points: 5 },
  { id: 2, name: 'Paper', type: 'recyclable', image: 'assets/images/paper.png', points: 5 },
  { id: 3, name: 'Glass Bottle', type: 'recyclable', image: 'assets/images/glass-bottle.png', points: 5 },
  { id: 4, name: 'Aluminum Can', type: 'recyclable', image: 'assets/images/aluminum-can.png', points: 5 },
  { id: 5, name: 'Cardboard', type: 'recyclable', image: 'assets/images/cardboard.png', points: 5 },
  { id: 6, name: 'Glass Jar', type: 'recyclable', image: 'assets/images/glass-jar.png', points: 5 },
  { id: 7, name: 'Metal Scrap', type: 'recyclable', image: 'assets/images/metal-scrap.png', points: 5 },
  { id: 8, name: 'Old Newspapers', type: 'recyclable', image: 'assets/images/old-newspapers.png', points: 5 },
  { id: 9, name: 'Magazines', type: 'recyclable', image: 'assets/images/magazines.png', points: 5 },
  { id: 10, name: 'Plastic Containers', type: 'recyclable', image: 'assets/images/plastic-containers.png', points: 5 },

  // Trash Items (10 items)
  { id: 11, name: 'Food Waste', type: 'trash', image: 'assets/images/food-waste.png', points: 5 },
  { id: 12, name: 'Used Paper Towels', type: 'trash', image: 'assets/images/used-paper-towels.png', points: 5 },
  { id: 13, name: 'Plastic Bags', type: 'trash', image: 'assets/images/plastic-bags.png', points: 5 },
  { id: 14, name: 'Styrofoam', type: 'trash', image: 'assets/images/styrofoam.png', points: 5 },
  { id: 15, name: 'Electronic Waste', type: 'trash', image: 'assets/images/electronic-waste.png', points: 5 },
  { id: 16, name: 'Battery', type: 'trash', image: 'assets/images/battery.png', points: 5 },
  { id: 17, name: 'Food Packaging', type: 'trash', image: 'assets/images/food-packaging.png', points: 5 },
  { id: 18, name: 'Used Coffee Cups', type: 'trash', image: 'assets/images/coffee-cups.png', points: 5 },
  { id: 19, name: 'Plastic Straws', type: 'trash', image: 'assets/images/plastic-straws.png', points: 5 },
  { id: 20, name: 'Used Batteries', type: 'trash', image: 'assets/images/used-batteries.png', points: 5 }
];

// Each item is worth 5 points, total possible score is 100 points