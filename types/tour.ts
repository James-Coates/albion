import { BlockContentProps } from '@sanity/block-content-to-react';

export interface Tour {
  id: string;
  slug: string;
  title: string;
  summary: BlockContentProps;
  mainImage: any;
  price: number;
  destinations: string;
  // availability: string;
  // slides?: Slide[];
  // mapData?: MapData;
  // itinerary?: ItineraryItem[];
  // inclusions?: InclusionsData;
}
