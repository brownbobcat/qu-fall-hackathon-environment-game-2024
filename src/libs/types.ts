export interface WasteItem {
    id: number;
    name: string;
    type: 'trash' | 'recyclable';
    image: string;
    points: number;
  }