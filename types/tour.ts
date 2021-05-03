import { BlockContentProps } from '@sanity/block-content-to-react';
import { InclusionsData } from './inclusions';

export interface Tour {
  _id: string;
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
  inclusionsData: InclusionsData;
}
