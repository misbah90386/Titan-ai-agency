export interface DemoProperty {
  id: string;
  name: string;
  neighborhood: string;
  type: string;
  status: 'Rent' | 'Sale';
  price: number;
  area: number;
  bedrooms: number;
  description: string;
}

export const DEMO_PROPERTIES: DemoProperty[] = [
  {
    id: 'prop-1',
    name: 'Modern Apartment in Al-Olaya',
    neighborhood: 'Al-Olaya',
    type: 'Apartment',
    status: 'Rent',
    price: 65000,
    area: 120,
    bedrooms: 2,
    description: 'Beautiful modern apartment in the heart of Riyadh with easy access to shopping and business districts.'
  },
  {
    id: 'prop-2',
    name: 'Luxury Villa in Hittin',
    neighborhood: 'Hittin',
    type: 'Villa',
    status: 'Sale',
    price: 4500000,
    area: 600,
    bedrooms: 5,
    description: 'Spacious luxury villa with a private pool and garden in the desirable Hittin neighborhood.'
  },
  {
    id: 'prop-3',
    name: 'Cozy Studio in Al-Malqa',
    neighborhood: 'Al-Malqa',
    type: 'Studio',
    status: 'Rent',
    price: 35000,
    area: 50,
    bedrooms: 0,
    description: 'Compact and modern studio perfect for young professionals in Al-Malqa.'
  },
  {
    id: 'prop-4',
    name: 'Duplex in An-Narjis',
    neighborhood: 'An-Narjis',
    type: 'Duplex',
    status: 'Sale',
    price: 1800000,
    area: 300,
    bedrooms: 4,
    description: 'Modern duplex with large windows and high ceilings in the growing An-Narjis area.'
  },
  {
    id: 'prop-5',
    name: 'Office Suite in King Fahd Road',
    neighborhood: 'King Fahd Road',
    type: 'Office',
    status: 'Rent',
    price: 150000,
    area: 250,
    bedrooms: 0,
    description: 'Prime office space on King Fahd Road, ideal for corporate headquarters.'
  }
];
