import { WasteItem } from './types';

export const availableItems: WasteItem[] = [
    { 
      id: 1, 
      name: 'Plastic Bottle', 
      type: 'recyclable',
      image: 'assets/images/plastic-bottle.png',
      points: 10
    },
    { 
      id: 2, 
      name: 'Food Waste', 
      type: 'trash',
      image: 'assets/images/food-waste.png',
      points: 5
    },
    { 
      id: 3, 
      name: 'Paper', 
      type: 'recyclable',
      image: 'assets/images/paper.png',
      points: 10
    },
    { 
      id: 4, 
      name: 'Glass Bottle', 
      type: 'recyclable',
      image: 'assets/images/glass-bottle.png',
      points: 15
    },
  ];

  export const Waste = [
    { 
        id: 2, 
        name: 'Food Waste', 
        type: 'trash',
        image: 'assets/images/food-waste.png',
        points: 5
      },
  ]

  export const Recycle = [
    { 
        id: 1, 
        name: 'Plastic Bottle', 
        type: 'recyclable',
        image: 'assets/images/plastic-bottle.png',
        points: 10
      },
      { 
        id: 3, 
        name: 'Paper', 
        type: 'recyclable',
        image: 'assets/images/paper.png',
        points: 10
      },
      { 
        id: 4, 
        name: 'Glass Bottle', 
        type: 'recyclable',
        image: 'assets/images/glass-bottle.png',
        points: 15
      },
  ]